import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Sačuvajte VRIJEME, sačuvajte NOVAC!</h1>
      <span className="mailDesc">
        Registrujte se i budite prvi da saznate o najboljim ponudama
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Vaš Email" />
        <button>Pretplatite se</button>
      </div>
    </div>
  );
};

export default MailList;
