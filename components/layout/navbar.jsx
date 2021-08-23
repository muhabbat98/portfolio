import Link from 'next/link'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import styles from '../../styles/Navbar.module.css'

export default function Layout({ children }) {
  return (
    <>
		<Navbar collapseOnSelect sticky="top" className={styles.navbar_link} expand="lg" variant="dark">
			<Container>
				<div className={styles.header_logo}>
					<Link   href="/" > BMP &#9825;</Link>
					<Link   href="/" > Muhabbat Pulatova </Link>
				</div>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ms-auto">
				<Nav.Link href="https://github.com/muhabbat98">GitHub</Nav.Link>
				{/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
				<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
					{/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
				</NavDropdown>
				</Nav>
				<Nav>
				<Nav.Link href="#deets">More deets</Nav.Link>
				<Nav.Link eventKey={2} href="#memes">
					Dank memes
				</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Container>
		</Navbar>
    </>
  )
}