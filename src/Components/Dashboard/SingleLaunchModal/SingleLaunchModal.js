import React,{useState,useEffect} from 'react';
import { useParams } from "react-router";
import ReactDOM from "react-dom";

import Modal from "react-modal";
import SignleLaunch from '../SingleLaunch/SignleLaunch';




const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const SingleLaunchModal = ({modalIsOpen, closeModal}) => {
    const { flight_number } = useParams();
    // console.log(flight_number)
    const [singleLaunch, setSingleLaunch] = useState("");
  
    useEffect(() => {
      fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
        .then((res) => res.json())
        .then((data) => setSingleLaunch(data));
    }, []);
  
    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>X</button>
          <br />
            
        </Modal>
      </div>
    );
};

export default SingleLaunchModal;