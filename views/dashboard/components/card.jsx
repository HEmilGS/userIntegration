/*eslint-disable*/
import { useNavigate } from "react-router-dom";
import userImage from "../../../src/assets/user.svg";

function Card({ user }) {
  console.log("Rendering Card");

  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Clicked ${user.id}`);
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="m-4">
      <div
        className="flex flex-col justify-center content-center shadow-lg h-60 w-60"
        onClick={handleClick}
      >
        <div className="flex justify-center content-center">
          <img src={userImage} alt="usuario vro" className="h-20" />{" "}
        </div>
        <div className="flex justify-center content-center">{user.name}</div>
        <div className="flex justify-center content-center">{user.email}</div>
      </div>
    </div>
  );
}

export default Card;
