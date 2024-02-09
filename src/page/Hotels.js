import "./Hotels.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="/pictures/picture9.jpg" alt="" className="fpImg" />
        <span className="fpName">Hilton</span>
        <span className="fpCity">Beograd</span>
        <span className="fpPrice">Ponude već od: €120</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Odlično</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="/pictures/picture10.jpg" alt="" className="fpImg" />
        <span className="fpName">Plaza Hotel</span>
        <span className="fpCity">NewYork</span>
        <span className="fpPrice">Ponude već od: €300</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Odlično</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="/pictures/picture11.jpg" alt="" className="fpImg" />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Atina</span>
        <span className="fpPrice">Ponude već od: €420</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Odlično</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="/pictures/picture12.jpg" alt="" className="fpImg" />
        <span className="fpName">Burj Al Arab</span>
        <span className="fpCity">Dubai</span>
        <span className="fpPrice">Ponude već od: €1720</span>
        <div className="fpRating">
          <button>9.8</button>
          <span>Odlično</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
