import React, { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  3;
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  setTimeout(() => titleUpdater("Home"), 5000);
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading...");
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}
