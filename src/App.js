import React from "react";
import {ApolloProvider} from '@apollo/react-hooks';


import Drop from "./drop";
import client from "./apollo";

const App = () => (
  <ApolloProvider client={client}>
    <div className='container-fluid m-5'>
      <Drop/>
    </div>
  </ApolloProvider>
);

export default App;
