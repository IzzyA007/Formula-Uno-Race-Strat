import React from 'react';
import alpineSymbol from '../team_logos/alpineSymbol.png';
import mercedesBenzLogo from '../team_logos/mercedesBenzLogo.png';
import redBullSymbol from '../team_logos/redBullSymbol.png';
import ferrariSymbol from '../team_logos/ferrariSymbol.png';
import haasSymbol from '../team_logos/haasSymbol.png';
import mclarenSymbol from '../team_logos/mclarenSymbol.png';
import astonMartinSymbol from '../team_logos/astonMartinSymbol.png';
import williamsSymbol from '../team_logos/williamsSymbol.png';
import kickSauberSymbol from '../team_logos/kickSauberSymbol.png';
import RBSymbol from '../team_logos/RBSymbol.png';

const TeamSelect = ({ onNext, setTeam }) => {

  const handleCardClick = (team) => {
    console.log(`${team} card clicked!`);
    setTeam(team); // Set the selected team
    onNext(); // Call the onNext function to move to the next step
  };

  return (
    <section className="the-page">
      <h1>Formula 1 Strategy Simulator</h1>
      <div className="cards-container">
        <h2>Select a team</h2>
        {/* Start of first row of cards */}
        <div className="row">
          {/* First Card (Alpine) */}
          <div className="column">
            <div className="card">
              <img src={alpineSymbol} alt="Alpine logo" className="card-img" />
              <h3 style={{ textDecorationColor: 'red' }}> Alpine </h3>
              <ul className="card-list">
                <li>Pieree Gasly</li>
                <li>Esteban Ocon</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Alpine')}>Select</button>
            </div>
          </div>
          {/* Second Card (Aston Martin) */}
          <div className="column">
            <div className="card">
              <img src={astonMartinSymbol} alt="Aston Martin logo" className="card-img" />
              <h3> Aston Martin </h3>
              <ul className="card-list">
                <li>Fernando Alonso</li>
                <li>Lance Stroll</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Aston Martin')}>Select</button>
            </div>
          </div>
          {/* Third Card (Ferrari) */}
          <div className="column">
            <div className="card">
              <img src={ferrariSymbol} alt="Ferrari logo" className="card-img" />
              <h3> Ferrari </h3>
              <ul className="card-list">
                <li>Carlos Sainz</li>
                <li>Charles Lecrec</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Ferrari')}>Select</button>
            </div>
          </div>
          {/* Fourth Card (Haas) */}
          <div className="column">
            <div className="card">
              <img src={haasSymbol} alt="Haas logo" className="card-img" />
              <h3> Haas </h3>
              <ul className="card-list">
                <li>Nico HulkenBerg</li>
                <li>Kevin Magnussen</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Haas')}>Select</button>
            </div>
          </div>
          {/* Fifth Card (Mclaren) */}
          <div className="column">
            <div className="card">
              <img src={mclarenSymbol} alt="McLaren logo" className="card-img" />
              <h3> McLaren </h3>
              <ul className="card-list">
                <li>Lando Norris</li>
                <li>Oscar Piastri</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('McLaren')}>Select</button>
            </div>
          </div>
        </div>
        {/* End of first row of cards */}
        {/* Start of second row */}
        <div className="row">
          {/* Sixth card (Mercedes) */}
          <div className="column">
            <div className="card">
              <img src={mercedesBenzLogo} alt="Mercedes logo" className="card-img" />
              <h3> Mercedes </h3>
              <ul className="card-list">
                <li>Lewis Hamilton</li>
                <li>George Russel</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Mercedes')}>Select</button>
            </div>
          </div>
          {/* Seventh card (RB) */}
          <div className="column">
            <div className="card">
              <img src={RBSymbol} alt="RB logo" className="card-img" />
              <h3> RB </h3>
              <ul className="card-list">
                <li>Yuki Tsunoda</li>
                <li>Daniel Riccardo</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Red Bull')}>Select</button>
            </div>
          </div>
          {/* Eighth Card (Red Bull Racing) */}
          <div className="column">
            <div className="card">
              <img src={redBullSymbol} alt="Red Bull Racing logo" className="card-img" />
              <h3> Red Bull Racing </h3>
              <ul className="card-list">
                <li>Max Verstappen</li>
                <li>Sergio Perez</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Red Bull Racing')}>Select</button>
            </div>
          </div>
          {/* Ninth Card (Kick Sauber) */}
          <div className="column">
            <div className="card">
              <img src={kickSauberSymbol} alt="Kick Sauber logo" className="card-img" />
              <h3> Kick Sauber </h3>
              <ul className="card-list">
                <li>Valterri Bottas</li>
                <li>Zhou Guanyu</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Kick Sauber')}>Select</button>
            </div>
          </div>
          {/* Tenth Card (Williams) */}
          <div className="column">
            <div className="card">
              <img src={williamsSymbol} alt="Williams logo" className="card-img" />
              <h3> Williams </h3>
              <ul className="card-list">
                <li>Alexander Albon</li>
                <li>Logan Sargeant</li>
              </ul>
              <button className="select-button" onClick={() => handleCardClick('Williams')}>Select</button>
            </div>
          </div>
        </div>
        {/* End of second row */}
      </div>
    </section>
  );
}

export default TeamSelect;
