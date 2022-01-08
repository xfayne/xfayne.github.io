import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Section from 'components/Section';
import { Button } from 'components/Button';
import Divider from 'components/Divider';
import { useWindowSize } from 'hooks';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './ProjectSummary.css';
import ProjectModel from './ProjectModel';

const ProjectSummary = ({
  id,
  visible,
  sectionRef,
  index,
  tag,
  title,
  description,
  tech,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) => {
  const { width } = useWindowSize();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;

  const renderTitle = status => (
    <Fragment>
      <div aria-hidden className="project-summary__index">
        <Divider
          notchWidth="64px"
          notchHeight="8px"
          collapsed={status !== 'entered'}
          collapseDelay={1000}
        />
        <span
          className={classNames(
            'project-summary__index-number',
            `project-summary__index-number--${status}`
          )}
        >
          {tag /* {indexText} */}
        </span>
      </div>
      <Heading
        level={3}
        as="h2"
        className={classNames(
          'project-summary__title',
          `project-summary__title--${status}`
        )}
        id={titleId}
      >
        {title}
      </Heading>
  </Fragment>
  );

  const renderDescription = status => (
    <Fragment>
      <Text
        className={classNames(
          'project-summary__description',
          `project-summary__description--${status}`
        )}
      >
        {description}
      </Text>
      <div
        className={classNames(
          'project-summary__button',
          `project-summary__button--${status}`
        )}
      >
        <Button iconHoverShift href={buttonLink} iconEnd="arrowRight">
          {buttonText}
        </Button>
      </div>
    </Fragment>
  );

  const renderDetails = status => (
    <div className="project-summary__details">
      {renderTitle(status)}
      {renderDescription(status)}
    </div>
  );

  return (
    <Section
      className={classNames('project-summary', {
        'project-summary--alternate': alternate,
        'project-summary--first': index === '01',
      })}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className="project-summary__content">
        <Transition in={visible} timeout={0} onEnter={reflow}>
          {status => (
            <Fragment>
              {!alternate && !isMobile && (
                <Fragment>
                  {renderDetails(status)}
                  <ProjectModel model={model} status={status} tech={tech}/>
                </Fragment>
              )}
              {(alternate && ! isMobile) && (
                <Fragment>
                  <ProjectModel model={model} status={status} tech={tech}/>
                  {renderDetails(status)}
                </Fragment>
              )}
              {isMobile && (
                <Fragment>
                  {renderTitle(status)}
                  <ProjectModel model={model} status={status} tech={tech}/>
                  {renderDescription(status)}
                </Fragment>
              ) }
            </Fragment>
          )}
        </Transition>
      </div>
    </Section>
  );
};

export default ProjectSummary;
