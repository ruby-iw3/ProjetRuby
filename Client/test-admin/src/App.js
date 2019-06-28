import React from 'react';
import { render } from 'react-dom';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

function App() {
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.user = {
      authenticated: true,
      token: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NjE3MTc4ODh9.4nsKUH4zetYlQNYONTsbDE_KFfccQZ_mkGmXyN6LG6I'
  }
    // add your own headers here
    //options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);

render(
    <Admin dataProvider={dataProvider}>
        <Resource name="articles" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>,
    document.getElementById('root')
);
}
export default App;