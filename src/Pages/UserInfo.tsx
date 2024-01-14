import "./userInfo.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UserInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    twitter: '',
    instagram: '',
    github: '',
    linkedIn: '',
    reddit: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/UserOutput');
  };

  return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <div className="links">
          <div className="element">
            <div className="textArea">Enter your Twitter</div>
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
            />
          </div>

          <div className="element">
            <div className="textArea">Enter your Instagram</div>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
            />
          </div>

          <div className="element">
            <div className="textArea">Enter your Github</div>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
            />
          </div>

          <div className="element">
            <div className="textArea">Enter your LinkedIn</div>
            <input
              type="text"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleInputChange}
            />
          </div>

          <div className="element">
            <div className="textArea">Enter your Reddit</div>
            <input
              type="text"
              name="reddit"
              value={formData.reddit}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};


export default UserInfo