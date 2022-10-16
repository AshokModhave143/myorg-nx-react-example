import { Button, Grid, Paper, Typography } from '@mui/material';
import { InputField } from '@myorg-nx-react-example/todos-ui';
import React from 'react';
import { ITodo } from '@myorg-nx-react-example/todos-shared-models';
import {
  useForm,
  Controller,
  FormProvider,
  FieldErrors,
  useFormContext,
} from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddTodoProps {
  onAdd: (todo: ITodo) => void;
}

interface TodoFormData {
  title: string;
  description: string;
}

export function AddTodo(props: AddTodoProps) {
  const methods = useForm<TodoFormData>({
    reValidateMode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit = (data: TodoFormData) => {
    props.onAdd({ ...data });
    methods.reset();
  };

  const onSubmitError = (formError: FieldErrors) => console.log(formError);

  return (
    <Paper sx={{ m: 2 }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onSubmitError)}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            rowSpacing={1}
            columnSpacing={2}
            padding={2}
          >
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ fontWeight: '700' }}>
                Add Todo
              </Typography>
            </Grid>
            <Grid item>
              <ControlledInputField name={'title'} label={'Title'} />
            </Grid>
            <Grid item>
              <ControlledInputField
                name={'description'}
                label={'Description'}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
              >
                Add ToDo
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Paper>
  );
}

const ControlledInputField: React.FC<{ name: string; label: string }> = ({
  name,
  label,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'This is required field',
      }}
      render={({ field, fieldState: { error } }) => (
        <InputField
          label={label}
          variant={'outlined'}
          error={!!error}
          helperText={error && error.message}
          {...field}
        />
      )}
    />
  );
};

export default AddTodo;
