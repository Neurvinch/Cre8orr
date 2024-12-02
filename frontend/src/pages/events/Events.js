import React from "react";
import EventHandling from "../../components/eventTypes/Eventhandling.js";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

export default function Events() {
  return (
    <div className="feed">
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <EventHandling />
        <Rightbar />
      </div>
    </div>
  );
}
