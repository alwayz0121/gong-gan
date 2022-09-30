import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Component/NavBar";
import List from "./Component/Post/List";
import Upload from "./Component/Post/Upload";

function App() {
  const [contentList, setContentList] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <List contentList={contentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/upload"
          element={
            <Upload contentList={contentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
