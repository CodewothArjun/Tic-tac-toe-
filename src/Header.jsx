import person1 from "./assets/boy.png";
import person2 from "./assets/student.png";
function Header() {
  return (
    <>
      <h1 align="center">Welcome to "Tic Tac Toe" Game Environment.</h1>
      <div className="box">
        <div className="person1">
          <img src={person1} alt="" />
          <h4>Player 1</h4>
        </div>
        <div className="person2">
          <img src={person2} alt="" />
          <h4>Player 2</h4>
        </div>
      </div>
    </>
  );
}

export default Header;
