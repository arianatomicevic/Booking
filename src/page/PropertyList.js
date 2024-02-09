import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="/pictures/picture4.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hoteli</h1>
          <h1>4836 hotela</h1>
        </div>
      </div>
      <div className="pListItem">
        <img src="/pictures/picture5.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Apartmani</h1>
          <h1>2354 apartmana</h1>
        </div>
      </div>
      <div className="pListItem">
        <img src="/pictures/picture6.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Rizortovi</h1>
          <h1>1820 rizorta</h1>
        </div>
      </div>
      <div className="pListItem">
        <img src="/pictures/picture7.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Vile</h1>
          <h1>1200 vila</h1>
        </div>
      </div>
      <div className="pListItem">
        <img src="/pictures/picture8.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Kolibe</h1>
          <h1>1932 kabina</h1>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
