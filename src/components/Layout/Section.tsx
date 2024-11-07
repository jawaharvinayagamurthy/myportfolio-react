import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}>
> = memo(({children, sectionId, noPadding = false, className}) => {
  return (
    <section className={classNames(className, {'px-0 py-0': noPadding,'px-4 py-16 md:py-6 lg:px-8': !noPadding})} 
    id={sectionId} style={{ marginLeft: '0.5in', marginRight: '0.5in'}} >
      <div className={classNames({'w-full': true})} style={{padding: '0.5in'}}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
