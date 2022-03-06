import React from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import { USERS } from './graphql/users';




function App() {
  
  const {data} = useQuery(USERS)
  console.log(data)

  return (
    <div className="App">
    <h1>hello</h1>
    </div>
  );
}

export default App;
