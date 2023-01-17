import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { dispatch } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //addEmployee(name, email, address, phone);
    dispatch({type: 'add_employee', employee : {
      name, email, address, phone
  }})
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="my-2">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="my-2">
        <Form.Label>User Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="enter user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="my-2">
        <Form.Label>User address</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="enter user address"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="my-2">
        <Form.Label>User Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter user phone number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mt-2">
        <Button variant="success" type="submit" className="w-100">
          Add New User
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddForm;
