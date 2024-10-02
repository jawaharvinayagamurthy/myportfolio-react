import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const Timeline: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-4 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-1">
        <h2 className="text-sm text-left font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-xs font-small italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-xs font-small sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

Timeline.displayName = 'TimelineItem';
export default Timeline;
