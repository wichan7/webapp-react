import './BoardPage.css';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

function BoardPage() {
  const id = useParams().id;
  const [board, setBoard] = useState({});

  useEffect(() => {
    fetch(`/board/${id}`)
      .then(res => res.json())
      .then(res => {
        setBoard(res);
      });
  }, []);

  return (
    <>board {board.id} {board.content}</>
  )
}

export default BoardPage;