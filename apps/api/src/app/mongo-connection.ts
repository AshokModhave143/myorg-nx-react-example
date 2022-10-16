import mongoose from 'mongoose';

(<any>mongoose).Promise = global.Promise;

interface IOnConnectedCallback {
  (): void;
}

export default class MongoConnection {
  private readonly mongoUrl: string;
  private onConnectedCallback: IOnConnectedCallback;
  private isConnectedBefore = false;

  constructor(mongoUrl: string) {
    this.mongoUrl = mongoUrl;

    mongoose.connection.on('error', this.onError);
    mongoose.connection.on('disconnected', this.onDisconnected);
    mongoose.connection.on('connected', this.onConnected);
    mongoose.connection.on('reconnected', this.onReConnected);
  }

  public close(onClosed: (err: any) => void) {
    console.log('Closing MongoDB connection');
    mongoose.connection.close(onClosed);
  }

  public connect(onConnectedCallback: IOnConnectedCallback) {
    this.onConnectedCallback = onConnectedCallback;
    this.startConnection();
  }

  private startConnection() {
    console.log(`Connecting to MongoDB at ${this.mongoUrl}`);
    mongoose.connect(this.mongoUrl).catch(() => {
      console.log('error in connection');
    });
  }

  private onConnected = () => {
    console.log(`Connected to MongoDb at ${this.mongoUrl}`);
    this.isConnectedBefore = true;
    this.onConnectedCallback();
  };

  private onReConnected = () => {
    console.log(`Re-Connected to MongoDb at ${this.mongoUrl}`);
    this.onConnectedCallback();
  };

  private onError = () => {
    console.log(`Could not connect to ${this.mongoUrl}`);
  };

  private onDisconnected = () => {
    if (!this.isConnectedBefore) {
      setTimeout(() => {
        this.startConnection();
      }, 2000);

      console.log('Retrying mongo connection');
    }
  };
}
