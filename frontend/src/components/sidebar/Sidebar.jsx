import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText"><a href="/home">Home</a></span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText"><a href="">My rents</a> </span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText"><a href="">my posts</a></span>
          </li>
           <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText"><a href="/events">Events</a></span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText"><a href="/profile">My Profiles</a></span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
