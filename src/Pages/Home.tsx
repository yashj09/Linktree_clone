import "./home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handle = (e: any) => {
    if (e.key === 'Enter') {
      // e.preventDefault();
      navigate(`/UserInfo`)
    }
  }
  return (
    <>
      <div className="name">
        <div className="text">
          <span>Linktree.com/</span>
          <input type="text" placeholder="Enter your name" onKeyDown={handle} />

        </div>
      </div>
    </>
  )
}

export default Home