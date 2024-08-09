import React, { Component } from 'react';

class RaceComponents extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            result: ""
        }
    }
    
    render() {
        const { team } = this.props; // Get the team prop

        return (
            <section className="the-page">
                <h1>Formula 1 Strategy Simulator</h1>
                <h2>You selected {team}</h2> {/* Display the selected team */}
                <div className="race-settings">
                    <h2>Select Race Conditions</h2>
                    {/* Circuit selection menu */}
                    <div className="dropdown">
                        <button>Circuit</button>
                        <div className="dropdown-content">
                            <button>Bahrain</button>
                            <button>Saudi Arabia</button>
                            <button>Australia</button>
                            <button>Japan</button>
                            <button>China</button>
                            <button>Miami</button>
                            <button>Emilia-Romagna</button>
                            <button>Monaco</button>
                            <button>Canada</button>
                            <button>Spain</button>
                            <button>Austria</button>
                            <button>Great Britain</button>
                            <button>Hungary</button>
                            <button>Netherlands</button>
                            <button>Italy</button>
                            <button>Azerbaijan</button>
                            <button>Singapore</button>
                            <button>United States</button>
                            <button>Mexico</button>
                            <button>Brazil</button>
                            <button>Las Vegas</button>
                            <button>Qatar</button>
                            <button>Abu Dhabi</button>
                        </div>
                    </div>
                    
                    {/* Weather selection menu */}
                    <div className="dropdown">
                        <button>Weather Conditions</button>
                        <div className="dropdown-content">
                            <div className="input-group">
                                <label htmlFor="air-pressure">Air Pressure (mbar):</label>
                                <input type="number" id="air-pressure" name="airpressure" min="0" max="100" step="1" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="wind-id">Wind Speed (m/s):</label>
                                <input type="number" id="wind-id" name="wind" min="0" max="100" step="1" />
                            </div>
                            
                            <div className="input-group">
                                <label htmlFor="temp-id">Temperature (C):</label>
                                <input type="number" id="temp-id" name="temperature" min="0" max="100" step="1" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="humidity-1">Humidity (%):</label>
                                <input type="number" id="humidity" name="humidity" min="0" max="100" step="1" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="wind-id">Track Temperature (C):</label>
                                <input type="number" id="wind-id" name="wind" min="0" max="100" step="1" />
                            </div>
                            
                            <div className="input-group">
                                <label>Rainfall:</label>
                                <input type="radio" id="rain" name="rain" value="rain"/>
                                <label htmlFor="rain">Rain</label>
                                <input type="radio" id="no-rain" name="rain" value="no-rain"/>
                                <label htmlFor="no-rain">No Rain</label>
                            </div>
                        </div>
                    </div>
                    
                    {/* Position selection menu */}
                    <div className="dropdown">
                        <button>Starting Position</button>
                        <div className="dropdown-content">
                            <div className="input-group">
                                <label htmlFor="wind-id">Racer 1 starting position:</label>
                                <input type="number" id="wind-id" name="wind" min="0" max="20" step="1" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="wind-id">Racer 2 starting position:</label>
                                <input type="number" id="wind-id" name="wind" min="0" max="20" step="1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RaceComponents;
