// Portfolio.tsx
import React, { FC, memo, useState } from 'react';
import Image from 'next/image';
import { portfolioItems as initialPortfolioItems, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import PortfolioModal from './PortfolioModal';
import ItemOverlay from './ItemOverlay';
import { PortfolioItem } from '../../data/dataDef';

const Portfolio: FC = memo(() => {
  const [portfolioItems] = useState<PortfolioItem[]>(initialPortfolioItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);

  const openModal = (item: PortfolioItem) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Explore my project work</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => {
            const { title, image } = item;
            return (
              <div className="relative" key={`${title}-${index}`}>
                <Image
                  alt={title}
                  className="h-48 w-full object-cover rounded-lg" // Set height and width
                  placeholder="blur"
                  src={image}
                />
                <ItemOverlay item={item} openModal={() => openModal(item)} title={title} /> {/* Pass the title as well */}
              </div>
            );
          })}
        </div>
        {currentItem && (
          <PortfolioModal
            isOpen={isModalOpen}
            onClose={closeModal}
            item={currentItem}
          />
        )}
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
