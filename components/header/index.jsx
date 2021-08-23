import { Col, Container, Row } from "react-bootstrap";
import styles from '../../styles/Header.module.css'
import Link from 'next/link'
export default function Header() {
  return (
    <div className={styles.header_nav}>
        <Container>
			<Row>
				<Col xs={12} sm = {6} className={styles.header_text}>
					<h2>Hi, my name is Muhabbat</h2>
					<h3>I'm node js developer. I can help you creating CRM, website and etc.</h3>
					<Link href="/about">About me</Link>
				</Col>
				<Col xs={12} sm={6}> two</Col>
			</Row>
        </Container>
    </div >
  )
}