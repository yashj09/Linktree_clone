import "./home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate(`/UserInfo`)
  }
  return (
    <>
      <div className="name">
        <div className="text">
          <span>Linktree.com/</span>
          <input type="text" placeholder="Enter your name" onChange={handle} />

        </div>
      </div>
    </>
  )
}

export default Home