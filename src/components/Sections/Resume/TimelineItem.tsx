import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const Timeline: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-4 text-center last:pb-0 md:text-left">
       <div className="flex items-center justify-between pb-1">
        <h2 className="text-sm font-bold">{title}</h2>
        <span className="text-xs italic text-gray-500">{date}</span>
      </div>
      <div className="flex items-center justify-center gap-x-2 md:justify-start">
        <span className="flex-1 text-xs italic sm:flex-none">{location}</span>
      </div>
      {content}
    </div>
  );
});

Timeline.displayName = 'TimelineItem';
export default Timeline;
