import './RegisterPage.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
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
    .then(res => {
      if (res.status === 200) {
        alert("your request has been successfully registered.");
        navigate("/")
      } else {
        alert("something wrong.")
      }
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