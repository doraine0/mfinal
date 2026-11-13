import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShirt, FaGaugeHigh, FaClipboardList, FaUsers, FaUserTie, FaMoneyBillWave } from "react-icons/fa6";

const items = [
  { label: "Dashboard", icon: <FaGaugeHigh /> },
  { label: "Laundry Orders", icon: <FaClipboardList /> },
  { label: "Customers", icon: <FaUsers /> },
  { label: "Staff", icon: <FaUserTie /> },
  { label: "Payments", icon: <FaMoneyBillWave /> },
];

export default function TopNav({ activePage = "Dashboard", onNavigate = () => {} }) {
  return (
    <header className="topbar">
      <Navbar expand="lg" className="topbar-inner">
        <Container fluid>
          <Navbar.Brand className="brand" href="#" onClick={(event) => { event.preventDefault(); onNavigate("Dashboard"); }}>
            <span className="brand-mark"><FaShirt /></span><span>Laun<span>Track</span><small>LAUNDRY MONITORING</small></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navigation" />
          <Navbar.Collapse id="main-navigation">
            <Nav className="main-nav">
              {items.map((item) => (
                <Nav.Link key={item.label} href="#" active={activePage === item.label} onClick={(event) => { event.preventDefault(); onNavigate(item.label); }}>
                  {item.icon}<span>{item.label}</span>
                </Nav.Link>
              ))}
            </Nav>
            <div className="profile-chip"><div className="avatar">A</div><div><strong>Admin</strong><small>Administrator</small></div></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
