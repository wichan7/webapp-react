import './RegisterPage.css';

import {useState} from 'react';

function RegisterPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (event) => setTitle(event.target.value);
  const handleContent = (event) => setContent(event.target.value);
  const handleSubmit = () => {
    fetch('/board', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, content})
    })
  }

  return (
    <div className="form">
      <input id="title"
            placeholder="title"
            value={title}
            onChange={handleTitle}></input>

      <textarea id="content"
            placeholder="content"
            value={content}
            onChange={handleContent}></textarea>

      <button id="submit" onClick={handleSubmit}>등록</button>
    </div>
  )
}

export default RegisterPage;