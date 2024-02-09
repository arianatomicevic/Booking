import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="/pictures/picture1.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>London</h1>
          <h1>736 smještaja</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img src="/pictures/picture2.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h1>533 smještaja</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src="/pictures/picture3.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Beč</h1>
          <h1>835 smještaja</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
