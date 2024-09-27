// PortfolioModal.tsx
import React, {FC, memo, useCallback} from 'react';
import Modal from 'react-modal';
import {PortfolioItem} from '../../data/dataDef';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem;
}

const PortfolioModal: FC<PortfolioModalProps> = memo(({isOpen, onClose, item}) => {
  const {title, description} = item;

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal
      className="modal"
      contentLabel="Portfolio Details"
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="overlay"
    >
      <div className="flex flex-col items-center p-4">
        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        <p className="mb-4 text-gray-700">{description}</p>
        <button
          className="rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
          onClick={handleClose} 
        >
          Close
        </button>
      </div>
    </Modal>
  );
});

export default PortfolioModal;







