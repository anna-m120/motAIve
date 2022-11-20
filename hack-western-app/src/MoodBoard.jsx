import React from "react";
import './MoodBoard.css';
function MoodBoard() {
  const [isShownAverages, updateShownAverages] = React.useState(false);
  return (
    <div className="mood-box">
      <div class="scene scene--card">
      <div className={isShownAverages ? "card is-flipped" : "card"} >
        <div class="card__face card__face--front">
        <div className="emotions">
            <label className="feeling" for="selections">How are you feeling?</label>
            <button className="emos" id="selections" onClick={() => updateShownAverages(true)}>
              <div id="happy" className="icon-pair">
                <svg width="3.5rem" height="3.5rem" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint0_radial_79_17)"/>
                  <path d="M40.0001 39.9998C35.5001 45.9997 26.0001 45.9998 22.0001 39.9998" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="15.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                  <circle cx="45.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                  <defs>
                  <radialGradient id="paint0_radial_79_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.5 19.5) rotate(114.6) scale(45.6426)">
                  <stop stop-color="#BD00AC"/>
                  <stop offset="1" stop-color="#AC2275"/>
                  </radialGradient>
                  </defs>
                </svg>
                <button>Happy</button>
              </div>
              <div id="neutral" className="icon-pair">
                  <svg width="3.5rem" height="3.5rem" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint0_radial_79_18)"/>
                    <path d="M22 41.5C27 37 35 45.5 40 41.5" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="15.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                    <circle cx="45.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                    <defs>
                    <radialGradient id="paint0_radial_79_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.5 19.5) rotate(114.6) scale(45.6426)">
                    <stop stop-color="#5B00BE"/>
                    <stop offset="1" stop-color="#A44BE7"/>
                    </radialGradient>
                    </defs>
                  </svg>
                  <button>Neutral</button>
              </div>
              <div id="sad" className="icon-pair">
                  <svg width="3.5rem" height="3.5rem" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint0_radial_79_19)"/>
                    <path d="M22 41.5C26.5 35.5 36 35.5 40 41.5" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="15.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                    <circle cx="45.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                    <defs>
                    <radialGradient id="paint0_radial_79_19" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.5 19.5) rotate(114.6) scale(45.6426)">
                    <stop stop-color="#1F61DD"/>
                    <stop offset="1" stop-color="#0038A2"/>
                    </radialGradient>
                    </defs>
                  </svg>
                  <button>Sad</button>
              </div>
            </button>
          </div>
        </div>
        <div class="card__face card__face--back">
          <div>
              <div className="feeling">Your current Mood</div>
              <div className="icon-pair">
                  <svg width="3.5rem" height="3.5rem" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint0_radial_79_17)"/>
                        <path d="M40.0001 39.9998C35.5001 45.9997 26.0001 45.9998 22.0001 39.9998" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="15.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                        <circle cx="45.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                        <defs>
                        <radialGradient id="paint0_radial_79_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.5 19.5) rotate(114.6) scale(45.6426)">
                        <stop stop-color="#BD00AC"/>
                        <stop offset="1" stop-color="#AC2275"/>
                        </radialGradient>
                        </defs>
                    </svg>
                    <button>Happy</button>
              </div>
              <button className="status" onClick={() => updateShownAverages(false)}>Change Your Status</button>
              <div style={{marginTop: `2em`}} className="feeling">Workplace Mood</div>
              <div id="neutral" className="icon-pair">
                  <svg width="3.5rem" height="3.5rem" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30.5" cy="30.5" r="30.5" fill="url(#paint0_radial_79_18)"/>
                    <path d="M22 41.5C27 37 35 45.5 40 41.5" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="15.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                    <circle cx="45.5" cy="24.5" r="2.5" fill="#D9D9D9"/>
                    <defs>
                    <radialGradient id="paint0_radial_79_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.5 19.5) rotate(114.6) scale(45.6426)">
                    <stop stop-color="#5B00BE"/>
                    <stop offset="1" stop-color="#A44BE7"/>
                    </radialGradient>
                    </defs>
                  </svg>
                  <button>Neutral</button>
              </div>
          </div> 
        </div>
      </div>
    </div>
    </div>
  );
}

export default MoodBoard;
