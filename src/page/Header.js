import {
  faBed,
  faCar,
  faCity,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const handleHotel = () => {
    navigate("/register");
  };

  const handlerHotel = () => {
    navigate("/home");
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Boravak</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Letovi</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Iznajmljivanje automobila</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCity} />
            <span>Atrakcije</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi od/do aerodroma</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Rezervišite Vaš šmještaj potpuno besplatno!{" "}
              <button onClick={handleHotel} className="headerBtnS">
                Ulogujte se / Registrujte se
              </button>
              <button onClick={handlerHotel} className="headerBtnS">
                Pogledajte našu ponudu
              </button>
            </h1>

            <img src="/pictures/picture28.jpg" alt="" className="headerImg" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
