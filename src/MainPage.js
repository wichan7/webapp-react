import './MainPage.css';
import Board from './Board/Board.js';
import {useEffect, useState} from 'react';

function Main() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch('/boards')
    .then(res => res.json())
    .then(res => {
      setBoards([...boards, ...res]);
    })
  }, []);

  return (
    <section>
      <div className="list">
        { boards.map( b => <Board key={b.id} board={b}></Board> ) }
      </div>
    </section>
  )
}

export default Main;