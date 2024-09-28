// PortfolioModal.tsx
import React, {FC, memo, useCallback} from 'react';
import Modal from 'react-modal';
import {PortfolioItem} from '../../data/dataDef';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItem;
  isLarge?: boolean; 
}

const PortfolioModal: FC<PortfolioModalProps> = memo(({isOpen, onClose, item, isLarge}) => {
  const {title, description} = item;

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal
      className={`modal ${isLarge ? 'large-modal' : ''}`}
      contentLabel="Portfolio Details"
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="overlay"
      style={{
        content: {
          maxWidth: '1400px', // Set your desired width here
          margin: 'auto', // Center the modal
        },
      }}
    >
        <div className="flex flex-col items-center p-4">
            <h2 className="mb-4 text-xl font-bold"
                style={{width: '100%', padding: '10px', border: '2px solid #ccc'}}>
            {title}</h2>
        <div
            className="mb-4 text-gray-700 overflow-y-auto"  // Add scrollable container
            style={{width: '100%', padding: '10px', maxHeight: '240px', overflowY: 'auto', border: '4px solid #ccc', boxSizing: 'border-box'}}>
            {description}
        </div>
        <button
          className="rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
          style={{width: '50%', padding: '10px', border: '2px solid #ccc'}}
          onClick={handleClose}>
          Close
        </button>
         </div>
    </Modal>
  );
});

export default PortfolioModal;
/*
<p className="mb-4 text-gray-700">{description}</p>
className="mb-4 text-gray-700 max-h-60 overflow-y-auto"
<div
          className="mb-4 text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
*/






