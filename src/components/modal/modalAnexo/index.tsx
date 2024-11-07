import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { BoxStyled } from "../style";
import { useState } from "react";
import { uploadFile } from "../../../server/endpoints";
import { FaUpload } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function ModalUpload({ isOpen, handleClose }: ModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null); //Armazena o arquivo,
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; //Lisat os arquivos pegando o primeiro
    if (file) {
      setSelectedFile(file); // Armazena o arquivo selecionado
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      setUploading(true);
      try {
        await uploadFile(selectedFile); //Chama a requisição para passar o arquivo
        console.log("Arquivo enviado");
      } catch (error) {
        console.error("Erro ao enviar o arquivo", error);
      } finally {
        setUploading(false);
        setSelectedFile(null); //Limpa
      }
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled>
        <label htmlFor="file-upload">
          <FaUpload size={60} color="#5907AF"/>
          <Typography sx={{ mt: 2, color: "gray" }}>
            Arraste o arquivo ou clique aqui para Anexar
          </Typography>
          <input
            id="file-upload"
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
            style={{ display: "none" }} // Esconde o campo de input padrão
          />
        </label>

        {/* Exibe o nome do arquivo selecionado */}
        {selectedFile && (
          <Typography sx={{ mt: 2 }}>
            Arquivo selecionado: {selectedFile.name}
          </Typography>
        )}
        {selectedFile && (
          <Button
            variant="contained"
            onClick={handleFileUpload}
            disabled={!selectedFile || uploading} // Desabilita enquanto faz o upload ou não tem arquivo
            sx={{ mt: 2, backgroundColor: "var(--purple-400)" }}
          >
            {uploading ? "Enviando..." : "Confirmar"}
          </Button>
        )}
      </BoxStyled>
    </Modal>
  );
}
