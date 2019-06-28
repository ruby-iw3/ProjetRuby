import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput, NumberInput } from 'react-admin';
import BookIcon from '@material-ui/core/svgIcon';
export const PostIcon = BookIcon;

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="content" />
            <TextField source="created_by" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="category_id" />
            <EditButton basePath="/posts" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Articles {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
            <DateInput label="Publication date" source="created_at" />
            <TextInput source="category_id" />
            <DisabledInput label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
        <TextInput source="title" />
            <TextInput source="content" />
            <TextInput source="created_by" />
            <DateInput label="Publication date" source="created_at" />
            <NumberInput source="category_id" />
            <DisabledInput label="Nb views" source="views" />
        </SimpleForm>
    </Create>
);