import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Result from './pages/Result';
import Contrtact from './pages/Contract';
import AddContrtact from './pages/addContract';
import EditContrtact from './pages/editContract';
import AddForm from './pages/addForm';
import EditForm from './pages/editform';
import FromDB from './pages/addFromDB';

function App() {
  return (<>
      <Route exact path="/">
          <HomePage />
      </Route>
      <Route exact path="/login">
          <Login />
      </Route>
      <Route exact path="/result">
          <Result />
      </Route>
      <Route exact path="/contract">
          <Contrtact />
      </Route>
      <Route exact path="/add-contract">
          <AddContrtact />
      </Route>
      <Route exact path="/edit-contract">
          <EditContrtact />
      </Route>
      <Route exact path="/add-form">
          <AddForm />
      </Route>
      <Route exact path="/edit-form">
          <EditForm />
      </Route>
      <Route exact path="/from-db">
          <FromDB />
      </Route>
    </>
  );
}

export default App;
