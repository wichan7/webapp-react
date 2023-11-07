import './MainPage.css';
import Board from './Board/Board.js';
import { useEffect, useState } from 'react';

function Main() {
  const [boards, setBoards] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/boards/${page}`)
      .then(res => res.json())
      .then(res => {
        setBoards([...boards, ...res]);
      })
  }, [page]);

  return (
    <>
      <section>
        <div className="list">
          {boards.map(b => <Board key={b.id} board={b}></Board>)}
        </div>
      </section>
      <div className="lifter"></div>
    </>
  )
}

export default Main;