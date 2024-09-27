// ItemOverlay.tsx
import React from 'react';
import { PortfolioItem } from '../../data/dataDef';

interface ItemOverlayProps {
  item: PortfolioItem;
  openModal: () => void;
  title: string; // Add title prop
}

const ItemOverlay: React.FC<ItemOverlayProps> = ({ openModal, title }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity p-4">
      <h3 className="text-white font-semibold mb-2 text-center">{title}</h3> {/* Display title */}
      <button onClick={openModal} className="text-white font-semibold bg-blue-500 rounded px-4 py-2 transition duration-300 hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
};

export default ItemOverlay;

