import {
  Navbar,
  Container,
  InputGroup,
  Button,
  FormControl
} from 'react-bootstrap';
import Mode from '../Mode/Mode';

export default function Navigation() {
  return (
    <Navbar className="justify-content-between">
      <Container>
        <InputGroup id="search">
          <InputGroup.Prepend>
            <Button variant="dark"></Button>
          </InputGroup.Prepend>
          <FormControl placeholder="Search" />
        </InputGroup>
        <Mode />
      </Container>
    </Navbar>
  );
}