import React from 'react';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Cafe from './Components/Cafe/Cafe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './Components/Question/Question';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Cafe></Cafe>
      <Card></Card>
      <ToastContainer></ToastContainer>
      <Question></Question>
    </div>
  );
};

export default App;