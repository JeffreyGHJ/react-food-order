import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

// Goal: use portal for the backdrop behind the overlay modal that we are creating
//     - this will block interaction with the rest of the page
// Goal: use portal to render the modal overlay itself so that it can be used
//       wherever we want while rendering the html in a specific place in the DOM



// we can declare multiple components in one file
// this may be fine if the components are closely tied together
// especially fine if the components are lean
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                { props.children }
            </div>
        </div>
    );
};

const portalDest = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalDest)}
            {ReactDOM.createPortal(<ModalOverlay>{ props.children }</ModalOverlay>, portalDest)}
        </>
    );
};

export default Modal;