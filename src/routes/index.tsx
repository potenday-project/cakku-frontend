import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage, QuestionPage, ResultPage } from 'pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
