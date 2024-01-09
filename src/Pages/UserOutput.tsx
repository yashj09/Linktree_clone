import "./userOutput.css"
const UserOutput = () => {
  return (
    <>
      <div className="contain">
        <div className="centrebox">
          <div className="image">
            <img src="user.jpg" alt="User-Image" />
          </div>
          <a href="https://x.com">
            <div className="card">
              Twitter
            </div>
          </a>
          <a href="https://instagram.com">
            <div className="card">
              Instagram
            </div>
          </a>
          <a href="https://github.com">
            <div className="card">
              Github
            </div>
          </a>
          <a href="https://linkdln.com">
            <div className="card">
              Linkdln
            </div>
          </a>
          <a href="https://reddit.com">
            <div className="card">
              Reddit
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default UserOutput