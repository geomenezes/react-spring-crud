import { Col } from 'react-bootstrap';
import '../../assets/App.css';
import TableBot from '../../components/Table'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Col md={6}>
          <TableBot />
        </Col>
      </header>
    </div>
  );
}
