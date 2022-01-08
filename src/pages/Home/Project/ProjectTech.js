import { createElement } from 'react';
import { useWindowSize } from 'hooks';
import { media } from 'utils/style';
import { useTheme } from 'components/ThemeProvider';
import { ReactComponent as Android } from 'assets/icons/android.svg';
import { ReactComponent as Javascript } from 'assets/icons/javascript.svg';
import { ReactComponent as Java } from 'assets/icons/java.svg';
import { ReactComponent as Typescript } from 'assets/icons/typescript.svg';
import { ReactComponent as ReactNative } from 'assets/icons/react-native.svg';
import { ReactComponent as AWS } from 'assets/icons/aws.svg';
import { ReactComponent as NodeJS } from 'assets/icons/node.svg';
import { ReactComponent as Mongodb } from 'assets/icons/mongodb.svg';
import { ReactComponent as PostgreSQL } from 'assets/icons/postgresql.svg';
import { ReactComponent as Python } from 'assets/icons/python.svg';
import { ReactComponent as CSS } from 'assets/icons/css.svg';

import classNames from 'classnames';

const icons = {
    Android,
    Java,
    Javascript,
    Typescript,
    NodeJS,
    React: ReactNative,
    "React Native": ReactNative,
    AWS,
    postgreSQL: PostgreSQL,
    Python,
    Mongodb,
    CSS,

};


export default function ProjectTech({type, status, tech=[]}) {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width <= media.mobile || windowSize.height <= 606;
    const theme = useTheme();
    const svgOpacity = theme.themeId === 'light' ? 0.7 : 1;
    return (
        <div style={{ '--opacity': svgOpacity }} className ={`project-summary__svg--${type}`}>
            {tech.map((name,i)=>createElement(icons[name],{
                key:i,
                className:classNames(
                    `project-summary__svg`,
                    `project-summary__svg--${status}`,
                    {
                      'project-summary__svg--light': theme.themeId === 'light',
                    }
                  ), 
                style:{'gridColumn':i+1,height:isMobile?'70px':'100px',width:isMobile?'70px':'100px'}
            }))}
        </div>
    );
}
