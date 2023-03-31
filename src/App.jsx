import React from 'react';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Cafe from './Components/Cafe/Cafe';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Cafe></Cafe>
      <Card></Card>
    </div>
  );
};

export default App;