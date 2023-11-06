import './Board.css';
import { Link } from 'react-router-dom';

function Board(props) {
  const {id, title} = props.board;

  return (
    <Link to={`/board/${id}`} className="board-wrapper">
      <span className="title">{title}</span>
    </Link>
  )
}

export default Board;