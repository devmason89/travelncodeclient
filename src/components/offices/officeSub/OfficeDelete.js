import React, {useState} from 'react';
import {
  Card, CardText, CardDeck, CardTitle, 
  Button, Popover, PopoverHeader, PopoverBody, Modal, ModalHeader, ModalBody} from 'reactstrap';
  import APIURL from '../../../helpers/environment';
  import './OfficeDelete.css';


  const OfficeDelete = (props) => {
      console.log(props);
      console.log(props.office);
      
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle= index => {
        setPopoverOpen(!popoverOpen);
    }

    const closeDeletion = () => {
        setPopoverOpen(false)
    }

    const deleteOffice = () => {
        console.log(props.office.id)
        fetch(`${APIURL}/office/${props.office.id}`, 
        {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchOffices())
    }
    
    return (
        <div>
        <Button id="deleteB" size="sm" block onClick={(e)=>{toggle(e)}}>Delete
         <Modal id="deleteModal" isOpen={popoverOpen} target="deleteB">
      <div>
         <ModalHeader id="popoverHeaderDelete">Confirm Deletion
         <Button id="cancelDelete" onClick={ () => {closeDeletion()}}close /></ModalHeader>
         <div id="deleteButtonRow">
            <ModalBody id="deleteBody">Are you sure you want to delete the "{props.office.name}" office?
                <Button id="yesD" size="sm" block onClick={() => {deleteOffice()}}>Yes</Button>
                <Button id="noD" size="sm" block onClick={()=>{toggle()}}>No</Button>
            </ModalBody>
         </div>
     </div>
      </Modal>
   </Button>
    </div>
    )
  }

  export default OfficeDelete;
