import { app } from './app/app';
import MongoConnection from './app/mongo-connection';

const mongoConnection = new MongoConnection(process.env.MONGO_URL);

if (process.env.MONGO_URL == null) {
  console.log('MONGO_URL not specified for the enviornment');
  process.exit(1);
} else {
  mongoConnection.connect(() => {
    app.listen(app.get('port'), (): void => {
      console.log(
        `Express server started at http://localhost:${app.get('port')}/api`
      );
    });
  });
}

process.on('SIGINT', () => {
  console.log('Gracefully shutting down');

  mongoConnection.close((err) => {
    if (err) {
      console.log(`Error shutting closing mongo connection: ${err}`);
    }
    process.exit(0);
  });
});
