import {FC, memo} from 'react';

import {education, certification, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Certifications">
          {certification.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`}/>
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <p className="pb-8" style={{fontSize: '13px'}}>
            Each skill is rated on a scale from 1 to 10, where 1 indicates basic familiarity and 10 represents
            expert-level mastery. The ratings reflect both my hands-on experience and depth of knowledge in each area,
            ensuring a clear understanding of my capabilities.
          </p>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 text-sm" >
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
