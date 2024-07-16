import React, { useContext } from 'react';
import alpineSymbol from '../team_logos/alpineSymbol.png';
import mercedesBenzLogo from '../team_logos/mercedesBenzLogo.png';
import redBullSymbol from '../team_logos/redBullSymbol.png';
import ferrariSymbol from '../team_logos/ferrariSymbol.png';
import haasSymbol from '../team_logos/haasSymbol.png';
import mclarenSymbol from '../team_logos/mclarenSymbol.png';
import astonMartinSymbol from '../team_logos/astonMartinSymbol.png';
import williamsSymbol from '../team_logos/williamsSymbol.png';
import kickSauberSymbol from '../team_logos/kickSauberSymbol.png';

const TeamSelect = () => {

    
  
  return (
    <section className = "the-page">
      <h1>Formula 1 Strategy Simulator</h1>
      <div className = "cards-container">
        
        <h2> Select a team Everyone</h2>
        {/*Start of first row of cards*/}
        <div className = "row">
          
          {/*First Card (Alpine)*/}
          <div className = "column">
            <div className = "card">
              <img src = {alpineSymbol} alt="Alpine logo" className="card-img"/>
              <h3 style = {{textDecorationColor: 'red'}}> Alpine </h3>
              <ul className = "card-list">
                <li>Pieree Gasly</li>
                <li>Esteban Ocon</li>
            </ul>
            </div>
          </div>
          
          {/*Second Card (Aston Martin) */}
          <div className = "column">
            <div className = "card">
              <img src= {astonMartinSymbol} alt="Aston Martin logo" className="card-img"></img>
              <h3> Aston Martin </h3>
              <ul className = "card-list">
                <li>Fernando Alonso</li>
                <li>Lance Stroll</li>
            </ul>
            </div>
          </div>
          
          {/*Third Card (Ferrari) */}
          <div className = "column">
            <div className = "card">
              <img src= {ferrariSymbol} alt="Ferrari logo" className="card-img"/>
              <h3> Ferrari </h3>
              <ul className = "card-list">
                <li>Carlos Sainz</li>
                <li>Charles Lecrec</li>
            </ul>
            </div>
          </div>
          
          {/*Fourth Card (Haas) */}
          <div className = "column">
            <div className = "card">
              <img src= {haasSymbol} alt="Card image" className="card-img"></img>
              <h3> Haas </h3>
              <ul className = "card-list">
                <li>Nico HulkenBerg</li>
                <li>Kevin Magnussen</li>
            </ul>
            </div>
          </div>
          
          {/*Firth Card (Mclaren) */}
          <div className = "column">
            <div className = "card">
              <img src= {mclarenSymbol} alt="Card image" className="card-img"></img>
              <h3> McLaren </h3>
              <ul className = "card-list">
                <li>Lando Norris</li>
                <li>Oscar Piastri</li>
            </ul>
            </div>
          </div>
        
        </div>
        {/******************End of first row of cards********************/}
        
        {/******************Start of second row**************************/}
        <div className = "row">
          
          {/* Sixth card (Mercedes)*/}
          <div className = "column">
            <div className = "card">
              <img src= {mercedesBenzLogo} alt="Card image" className="card-img"/>
              <h3> Mercedes </h3>
              <ul className = "card-list">
                <li>Lewis Hamilton</li>
                <li>George Russel</li>
            </ul>
            </div>
          </div>
          
          {/*Seventh card (RB) */}
          <div className = "column">
            <div className = "card">
              <img src="" alt="Card image" className="card-img"></img>
              <h3> RB </h3>
              <ul className = "card-list">
                <li>Yuki Tsunoda</li>
                <li>Daniel Riccardo</li>
            </ul>
            </div>
          </div>
          
          {/*Eight Card (Red Bull Racing) */}
          <div className = "column">
            <div className = "card">
              <img src= {redBullSymbol} alt="Card image" className="card-img"></img>
              <h3> Red Bull Racing </h3>
              <ul className = "card-list">
                <li>Max Verstappen</li>
                <li>Sergio Perez</li>
            </ul>
            </div>
          </div>
          
          {/*Ninth Card (Kick Sauber) */}
          <div className = "column">
            <div className = "card">
              <img src= {kickSauberSymbol} alt="Card image" className="card-img"></img>
              <h3> Kick Sauber </h3>
              <ul className = "card-list">
                <li>Valterri Bottas</li>
                <li>Zhou Guanyu</li>
            </ul>
            </div>
          </div>
          
          {/*Tenh Card (Williams) */}
          <div className = "column">
            <div className = "card">
              <img src= {williamsSymbol} alt="Card image" className="card-img"></img>
              <h3> Williams </h3>
              <ul className = "card-list">
                <li>Alexander Albon</li>
                <li>Logan Sargeant</li>
            </ul>
            </div>
          </div>
        
        </div>
        
        {/**********************End of second row*****************************/}
        
      </div>
    </section>
    );
  }
  
  export default TeamSelect;