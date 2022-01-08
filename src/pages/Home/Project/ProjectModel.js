import { Fragment } from 'react';
import classNames from 'classnames';
import Model from 'components/Model';
import { useWindowSize } from 'hooks';
import { isVisible } from 'utils/transition';
import { media } from 'utils/style';
import ProjectTech from './ProjectTech';
import deviceModels from 'components/Model/deviceModels';
import { useTheme } from 'components/ThemeProvider';


export default function ProjectModel({model,status,tech}) {
    const windowSize = useWindowSize();
    const theme = useTheme();
    const isMobile = windowSize.width <= media.mobile || windowSize.height <= 606;
    const svgOpacity = theme.themeId === 'light' ? 0.7 : 1;
    const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
    const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
    const svgClassName = type => classNames(
        'project-summary__svg',
        `project-summary__svg--${type}`,
        `project-summary__svg--${status}`,
        {
          'project-summary__svg--light': theme.themeId === 'light',
        }
      );
    
    const renderLaptop =() =>(
        <Fragment>
            <ProjectTech status={status} type="laptop" tech={tech} />
            <Model
              className={classNames(
                'project-summary__model',
                'project-summary__model--laptop'
              )}
              alt={model.alt}
              cameraPosition={{ x: 0, y: isMobile? -0.2 :0, z: isMobile? 6 : 8 }}
              showDelay={800}
              show={isVisible(status)}
              models={[
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model.textures[0],
                    sizes: laptopSizes,
                  },
                },
              ]}
            />
        </Fragment>
        );
      
        const render2Phones = () => (
          <Fragment>
            <ProjectTech status={status} type="2phones" tech={tech} />
            <Model
              className={classNames(
                'project-summary__model',
                'project-summary__model--phone'
              )}
              alt={model.alt}
              cameraPosition={{ x: 0, y: 0, z: 11.5 }}
              showDelay={500}
              show={isVisible(status)}
              models={[
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model.textures[0],
                    sizes: phoneSizes,
                  },
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model.textures[1],
                    sizes: phoneSizes,
                  },
                },
              ]}
            />
          </Fragment>
        );
      
        const renderPhone = () => (
          <Fragment>
            <ProjectTech status={status} type="phone" tech={tech} />
            <Model
              className={classNames(
                'project-summary__model',
                'project-summary__model--phone'
              )}
              alt={model.alt}
              cameraPosition={{ x: 0, y: isMobile? -0.5 : 0, z: isMobile? 6 : 10.5 }}
              showDelay={500}
              show={isVisible(status)}
              models={[
                {
                  ...deviceModels.phone,
                  position: { x: 0, y: 0, z: 0.7 },
                  rotate:[0,0,Math.PI/2],
                  texture: {
                    ...model.textures[0],
                    sizes: phoneSizes,
                  },
                },
              ]}
            />
          </Fragment>
        );
      
        const renderPhoneAndLaptop = () => (
          <Fragment>
            <ProjectTech status={status} type="phone-and-laptop" tech={tech} />
            <Model
              className={classNames(
                'project-summary__model',
                'project-summary__model--phone-laptop'
              )}
              alt={model.alt}
              cameraPosition={{ x: 0, y: isMobile? -0.3 : 0, z: isMobile? 8 : 14 }}
              showDelay={1500}
              show={isVisible(status)}
              models={[
                {
                  ...deviceModels.laptop,
                  position: { x: -1, y: -1.17, z: 0 },
                  rotate:[0,Math.PI/10,0],
                  texture: {
                    ...model.textures[0],
                    sizes: laptopSizes,
                  },
                },
                {
                  ...deviceModels.phone,
                  position: { x: 2, y: 0, z: -0.5 },
                  //rotate:[0,0,Math.PI/2],
                  rotate:[0,-Math.PI/8,0],
                  texture: {
                    ...model.textures[1],
                    sizes: phoneSizes,
                  },
                },
              ]}
            />
          </Fragment>
        );
      
        const renderPhoneAndWatch = () => (
          <Fragment>
            <ProjectTech status={status} type="phone-and-watch" tech={tech} />
            <Model
              className={classNames(
                'project-summary__model',
                'project-summary__model--phone'
              )}
              alt={model.alt}
              cameraPosition={{ x: isMobile? 0.2 : 0, y: isMobile? -0.5 :0, z: isMobile? 6 : 11 }}
              showDelay={500}
              show={isVisible(status)}
              models={[
                {
                  ...deviceModels.phone,
                  position: { x: 0.1, y: 0.3, z: 0 },
                  //scale: [1.2,1.2,1.2],
                  rotate:[0,-Math.PI/30,Math.PI/2],
                  texture: {
                    ...model.textures[0],
                    sizes: laptopSizes,
                  },
                },
                {
                  ...deviceModels.watch,
                  position: { x: 1.5, y: -1.3, z: 1.5 },
                  scale: [0.3,0.3,0.3],
                  //rotate:[0,0,Math.PI/2],
                  rotate:[-Math.PI/8,-Math.PI/8,0],
                  texture: {
                    ...model.textures[1],
                    sizes: phoneSizes,
                  },
                },
              ]}
            />
          </Fragment>
        );
    return (
        <div className="project-summary__preview">
        {model.type === 'laptop' && renderLaptop()}
        {model.type === 'phone' && renderPhone() }
        {model.type === 'phone&laptop' && renderPhoneAndLaptop()}
        {model.type === 'phone&watch' && renderPhoneAndWatch()}
        </div>
    );
};
