// Portfolio.tsx
import React, {FC, memo, useState, useCallback} from 'react';
import Image from 'next/image';
import {portfolioItems as initialPortfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import PortfolioModal from './PortfolioModal';
import ItemOverlay from './ItemOverlay';
import {PortfolioItem} from '../../data/dataDef';
import classNames from 'classnames';

const Portfolio: FC = memo(() => {
  const [portfolioItems] = useState<PortfolioItem[]>(initialPortfolioItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);

  // Memoize the openModal function
  const openModal = useCallback((item: PortfolioItem) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  }, []);

  // Memoize the closeModal function
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentItem(null);
  }, []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Explore my project work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => {
            const { title, image } = item;
            return (
              <div className="relative" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-[250px] w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}
                >
                  <Image alt={title} src={image} layout="fill" objectFit="cover" />
                  <ItemOverlay item={item} openModal={() => openModal(item)} title={title} />
                </div>
              </div>
            );
          })}
        </div>
        {currentItem && (
          <PortfolioModal
            isOpen={isModalOpen}
            item={currentItem}
            onClose={closeModal} // Sorted alphabetically
          />
        )}
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

//<ItemOverlay item={item} openModal={() => openModal(item)} title={title} /> {/* Pass the title as well */}

