import "./userOutput.css"

const UserOutput = () => {
  return (
    <>
      <div className="contain">
        <div className="centrebox">
          <div className="image">
            <img src="user.jpg" alt="User-Image" />
          </div>
          <div className="links">
            <a href="https://x.com" target="_blank">
              <div className="card">
                Twitter
              </div>
            </a>
          </div>
          <div className="links ">
            <a href="https://instagram.com" target="_blank">
              <div className="card">
                Instagram
              </div>
            </a>
          </div>
          <div className="links">
            <a href="https://github.com" target="_blank">
              <div className="card">
                Github
              </div>
            </a>
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/" target="_blank">
              <div className="card">
                Linkedin
              </div>
            </a>
          </div>
          <div className="links">
            <a href="https://reddit.com" target="_blank">
              <div className="card">
                Reddit
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserOutput