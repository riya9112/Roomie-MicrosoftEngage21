import React, { useState, useEffect } from "react";
import "../Styling/Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import db from "../Firebase/firebase";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar(props) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .firestore()
      .collection("rooms")
      .onSnapshot((snapshot) =>
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <Button variant="dark">
          <Link to="/" className="text-info">
            Home
          </Link>
        </Button>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
