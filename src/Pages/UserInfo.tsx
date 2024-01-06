import "./userInfo.css"
import { useState } from "react";

const UserInfo = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="links">
          <div className="element">
            <div className="textArea">
              Enter your Twitter
            </div>
            <input type="text" onChange={handleChange} value={inputValue} />
          </div>

          <div className="element">
            <div className="textArea">
              Enter your Instagram
            </div>
            <input type="text" />
          </div>
          <div className="element">
            <div className="textArea">
              Enter your Github
            </div>
            <input type="text" />
          </div>
          <div className="element">
            <div className="textArea">
              Enter your Linkedln
            </div>
            <input type="text" />
          </div>
          <div className="element">
            <div className="textArea">
              Enter your Reddit
            </div>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo