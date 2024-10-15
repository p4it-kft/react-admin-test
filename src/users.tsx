import { List, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, useAuthState, Loading } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export const UserEdit = () => {
  const {isLoading, authenticated} = useAuthState();

  if(isLoading) {
    return <Loading></Loading>;
  }

  return (
    <Edit disableAuthentication>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" />
        <TextInput source="phone" />
        <TextInput source="website" />
        <TextInput source="company.name" />
      </SimpleForm>
    </Edit>
  );
};