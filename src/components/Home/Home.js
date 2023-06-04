import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import people from "../../assets/people.png";

const Home = () => {
  return (
    <div>
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
            <div className="event-button">Weekdays</div>
            <div className="event-button">Event Type</div>
            <div className="event-button">Any Category</div>
          </div>
        </div>

        <div className="event-cards">
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
