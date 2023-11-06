import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        🏠<br/>
        홈
      </Link>
      <Link to="/register">
        ➕<br/>
        글 등록
      </Link>
      <Link to="/mypage">
        😀<br/>
        마이페이지
      </Link>
      <Link to="/setting">
        ⚙<br/>
        설정
      </Link>
    </div>
  )
}

export default Nav;