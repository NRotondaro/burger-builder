import classes from './Modal.module.css';
import BackDrop from './Backdrop';

const Modal = (props) => (
    <div>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0' 
        }} className={classes.Modal}>
            {props.children}
        </div>
    </div>
);

export default Modal;