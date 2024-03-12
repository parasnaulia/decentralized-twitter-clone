import "./Profile.css";
function Profile() {
  return (
    <>
      <div className="Container">
        <div className="Inner">
          <ul className="ul">
            <li>
              <a href="/">Home</a>{" "}
            </li>
            <li>About </li>
            <li> Support</li>
            <li> LogOut</li>
          </ul>
        </div>
        <div class="Another">
          <div>
            <img
              style={{ height: "100px", width: "100px" }}
              src="./Paras.png"
              alt="Sorry"
            />
            <div className="Data">Paras Naulia</div>
            <div className="Data">
              {" "}
              Followers 200<span> Following 300</span>
            </div>
            <div className="Data">ParasNaulia645@gmail.com</div>
            <div className="Data"> 24</div>
            <div className="Data"> Support</div>
            <div className="Data">Logout</div>
            <div className="Data">
              <a>Settings</a>
            </div>
          </div>
          <div className="About">
            <h1>About</h1>
            <div className="Ab">Full Name: Paras Naulia</div>
            <div className="Ab">Address: Bhimtal</div>
            <div className="Ab">Phone: 9997272448</div>
            <div className="Ab">Full Name: Paras Naulia</div>
            <div className="Ab">Email: Parasnaulia645@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
