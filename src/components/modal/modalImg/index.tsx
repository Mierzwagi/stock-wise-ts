import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BoxStyled, ImgItem } from "../style";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  imgUrl: string | null;
}

export function ModalImage({ isOpen, handleClose, imgUrl }: ModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Imagem do item
        </Typography>
        {imgUrl?(
          <ImgItem src={imgUrl} alt="Imagem do item"  />
        ):(
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nenhuma imagem disponível para este item.
          </Typography>
        )}
      </BoxStyled>
    </Modal>
  );
}
