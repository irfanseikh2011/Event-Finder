import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import people from "../../assets/people.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div className="outer-container">
      <div className="head-banner">
        <Header className="header" />
        <div className="head-middle-row">
          <img src={people} className="people-img" />
          <div className="head-middle-info">
            <h1>
              Discover Exciting Events Near You: Your Ultimate Event Finder
            </h1>
            <h3>
              "Explore a World of Entertainment and Activities: Your Go-To
              Source for Local and Virtual Events"
            </h3>
          </div>
        </div>
      </div>
      <div className="head-search-container">
        <div className="head-search">
          <div className="head-search-event">
            <p>Search Event</p>
            <input placeholder="Dua Lipa" type="text" />
          </div>
          <div className="head-search-event">
            <p>Place</p>
            <input placeholder="United Kingdom" type="text" />
          </div>
          <div className="head-search-event">
            <p>Date</p>
            <input placeholder="&nbsp;" type="date" />
          </div>
        </div>
      </div>

      <div className="event-container">
        <div className="event-head">
          <h2>Upcoming Events</h2>
          <div className="event-button-container">
            <div className="event-button">Weekdays <FontAwesomeIcon icon={faChevronDown} /></div>
            <div className="event-button">Event Type <FontAwesomeIcon icon={faChevronDown} /></div>
            <div className="event-button">Any Category <FontAwesomeIcon icon={faChevronDown} /></div>
          </div>
        </div>

        <div className="event-cards">
            <div className="event-card">
                <img src={bg}/>
                <div className="event-card-details">
                    <div className="event-card-details-date">
                        <h3>APR</h3>
                        <h2>14</h2>
                    </div>
                    <div className="event-card-details-info">
                        <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                        <h4>We’ll get you directly seated and inside for you to enjoy the show.</h4>
                    </div>
                </div>
            </div>
            <div className="event-card">
                <img src={bg}/>
                <div className="event-card-details">
                    <div className="event-card-details-date">
                        <h3>APR</h3>
                        <h2>14</h2>
                    </div>
                    <div className="event-card-details-info">
                        <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                        <h4>We’ll get you directly seated and inside for you to enjoy the show.</h4>
                    </div>
                </div>
            </div>
            <div className="event-card">
                <img src={bg}/>
                <div className="event-card-details">
                    <div className="event-card-details-date">
                        <h3>APR</h3>
                        <h2>14</h2>
                    </div>
                    <div className="event-card-details-info">
                        <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                        <h4>We’ll get you directly seated and inside for you to enjoy the show.</h4>
                    </div>
                </div>
            </div>
            <div className="event-card">
                <img src={bg}/>
                <div className="event-card-details">
                    <div className="event-card-details-date">
                        <h3>APR</h3>
                        <h2>14</h2>
                    </div>
                    <div className="event-card-details-info">
                        <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                        <h4>We’ll get you directly seated and inside for you to enjoy the show.</h4>
                    </div>
                </div>
            </div>
            <div className="event-card">
                <img src={bg}/>
                <div className="event-card-details">
                    <div className="event-card-details-date">
                        <h3>APR</h3>
                        <h2>14</h2>
                    </div>
                    <div className="event-card-details-info">
                        <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                        <h4>We’ll get you directly seated and inside for you to enjoy the show.</h4>
                    </div>
                </div>
            </div>
            <div className="event-card">
                <img src={bg}/>
                <div className="event-card-details">
                    <div className="event-card-details-date">
                        <h3>APR</h3>
                        <h2>14</h2>
                    </div>
                    <div className="event-card-details-info">
                        <h3>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h3>
                        <h4>We’ll get you directly seated and inside for you to enjoy the show.</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="load-container">
        <div className="load-button">Load More</div>
        </div>
    
      </div>

      <div className="footer"> 
            <div className="footer-info">
                <img src={logo}/>
                <h3>Discover upcoming events in your town: Your go-to online destination for staying updated with the latest happenings.</h3>
            </div>
            <hr className="line"/>
           <h4 className="copyright">Made with <FontAwesomeIcon style={{color:"red"}} icon={faHeart} /> by Sekh Mohammad Irfan </h4>
      </div>
    </div>
  );
};

export default Home;
