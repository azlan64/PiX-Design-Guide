/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import SignForm from './components/SignForm';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Tab from './Tab';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log in to ZAS</ModalHeader>
          <ModalBody>
              <Tab />
          </ModalBody>
          <ModalFooter>


              OR

              <Button color="secondary" onClick={this.toggle}>Connect with Facebook</Button>

          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalExample;
