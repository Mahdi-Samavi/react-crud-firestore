import {
    Container,
    Row
} from 'react-bootstrap';
import Items from '../Items/Items';

export default function Content() {
    return (
        <Container>
          <Row>
           <Items />
          </Row>
        </Container>
    );
}