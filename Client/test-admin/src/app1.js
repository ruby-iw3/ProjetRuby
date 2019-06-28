import React, { Component } from "react";
import { render } from 'react-dom';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.user = {
        authenticated: true,
        token: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NjE3OTUxMzZ9.jo9d74LCkZQ63eTuokCodRy_491tCXQj5ShPuISvI0o'
    };
    console.log(options);
    //add your own headers here
    //options.headers.set('Access-Control-Request-Method', 'token');
    //options.headers.set('Origin', 'http://localhost:3001');
    return fetchUtils.fetchJson(url, options);
    
};
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);


class App1 extends Component {

render() {
    return (
    <Admin dataProvider={dataProvider}>
    <Resource name="articles" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
    );
}
}

export default App1;