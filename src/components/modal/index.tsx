import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BoxStyled } from "./style";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function MyModal({isOpen, handleClose}: ModalProps)  {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Arraste o arquivo ou clique aqui para Anexar
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </BoxStyled>
    </Modal>
  );
}
