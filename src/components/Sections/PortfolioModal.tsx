// PortfolioModal.tsx
import React, {FC, memo} from 'react';
import Modal from 'react-modal';
import {PortfolioItem} from '../../data/dataDef';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem;
}

const PortfolioModal: FC<PortfolioModalProps> = memo(({isOpen, onClose, item}) => {
  const {title, description} = item;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Portfolio Details"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="flex flex-col items-center p-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white rounded px-4 py-2 transition duration-300 hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </Modal>
  );
});

export default PortfolioModal;







