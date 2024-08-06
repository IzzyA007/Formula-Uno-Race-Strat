import React, { useContext, Component } from 'react';


class RaceComponents extends Component {
    
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }
    
    render() {
        return (
            <section className = "the-page">
                <h1>Formula 1 Strategy Simulator</h1>
                <h2>You selected </h2>
                <div className="race-settings">
                    <h2>Select Race Conditions</h2>
                    {/*Circuit selection menu*/}
                    <div class="dropdown">
                        <button>Circuit</button>
                        <div class="dropdown-content">
                            <button>Bahrain</button>
                            <button>Saudi Arabia</button>
                            <button>Australlia</button>
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
                    
                    {/*Weather selection menu*/}
                    <div class="dropdown">
                        <button>Weather Conditions</button>
                        <div class="dropdown-content">
                            <div class="input-group">
                                <label for="air-pressure">Air Pressure (mbar):</label>
                                <input type="number" id="air-pressure" name="airpressure" min="0" max="100" step="1" />
                            </div>
                            <div class="input-group">
                                <label for="wind-id">Wind Speed (m/s):</label>
                                <input type="number" id="wind-id" name="wind" min="0" max="100" step="1" />
                            </div>
                            
                            <div class="input-group">
                                <label for="temp-id">Temperature (C):</label>
                                <input type="number" id="temp-id" name="temperature" min="0" max="100" step="1" />
                            </div>
                            <div class="input-group">
                                <label for="humidity-1">Humidity (%):</label>
                                <input type="number" id="humidity" name="humidity" min="0" max="100" step="1" />
                            </div>
                            <div class="input-group">
                                <label for="wind-id">Track Temperature (C):</label>
                                <input type="number" id="wind-id" name="wind" min="0" max="100" step="1" />
                            </div>
                            
                            
                            <div class="input-group">
                                <label>Rainfall:</label>
                                <input type="radio" id="rain" name="rain" value="rain"/>
                                <label for="rain">Rain</label>
                                <input type="radio" id="no-rain" name="rain" value="no-rain"/>
                                <label for="no-rain">No Rain</label>
                            </div>
                            
                        </div>
                    </div>
                    
                    {/*Position selection menu*/}
                    <div class="dropdown">
                        <button>Starting Position</button>
                        <div class="dropdown-content">
                            <div class="input-group">
                                <div class="input-group">
                                    <label for="wind-id">Racer 1 starting position:</label>
                                    <input type="number" id="wind-id" name="wind" min="0" max="20" step="1" />
                                </div>
                                <div class="input-group">
                                    <label for="wind-id">Racer 2 starting position:</label>
                                    <input type="number" id="wind-id" name="wind" min="0" max="20" step="1" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                    
                </div>
            </section>
        );
    }
}

export default RaceComponents;