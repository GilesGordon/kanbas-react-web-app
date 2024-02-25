import { Link, useLocation } from "react-router-dom";
// import "/libs/font-awesome/css/font-awesome.min.css";
import "../styles.css"
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaPrint, FaRegClock, FaRegCaretSquareRight, FaArrowCircleRight, FaRegQuestionCircle} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="wd-kanbas-user-grey" />  },
    { label: "Dashboard", icon: <FaTachometerAlt  />  },
    { label: "Courses",   icon: <FaBook />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt /> },
    { label: "Inbox",  icon: <FaPrint /> },
    { label: "History",  icon: <FaRegClock /> },
    { label: "Studio",  icon: <FaRegCaretSquareRight  /> },
    { label: "Commons",  icon: <FaArrowCircleRight /> },
    { label: "Help",  icon: <FaRegQuestionCircle/> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="wd-flex-column wd-nav-wrapper">
        <ul className="wd-kanbas-navigation">
            <li>
            <Link to={`/Kanbas/Dashboard`}> <img
                className="wd-kanbas-image-fit"
                src="\images\northeastern-logo.png"
            /></Link>
            </li>
        {links.map((link, index) => (
            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> <div className="wd-padding-b5"><span className= "wd-kanbas-navigation-icon">{link.icon}</span></div> {link.label} </Link>
            </li>
        ))}
        </ul>
        <ul className="wd-kanbas-navigation wd-full-height wd-flex-grow-1"></ul>
    </div>
  );
}
export default KanbasNavigation;