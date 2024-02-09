import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Zemlje</li>
          <li className="fListItem">Regije</li>
          <li className="fListItem">Gradovi</li>

          <li className="fListItem">Aerodromi</li>
          <li className="fListItem">Hoteli</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Privatni smještaji </li>
          <li className="fListItem">Apartmani </li>
          <li className="fListItem">Rizortovi </li>
          <li className="fListItem">Vile</li>
          <li className="fListItem">Hosteli</li>
          <li className="fListItem">Pansioni</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Jedinstvena mjesta za boravak </li>
          <li className="fListItem">Recenzije</li>

          <li className="fListItem">Sezonske i praznične ponude</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Iznajmljivanje auta</li>
          <li className="fListItem">Pretraživanje letova</li>
          <li className="fListItem">Rezervacije restorana</li>
          <li className="fListItem">Putne agencije </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Pomoć korisničkog servira</li>
          <li className="fListItem">Pomoć partnera</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Ekološka održivost</li>
          <li className="fListItem">Centar za medije</li>
          <li className="fListItem">Centar za informacije o sigurnostima</li>
          <li className="fListItem">Kako radimo</li>
          <li className="fListItem">Izjava o privatnostima i kolačićima</li>
        </ul>
      </div>
      <div className="fText">Autorska prava © 2023 BookYourVacation.</div>
    </div>
  );
};

export default Footer;
