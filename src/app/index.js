import './reset.css';
import './index.css';

import { initialState, reducer } from 'app/reducer';
import classNames from 'classnames';
import Navbar from 'components/Navbar';
import ThemeProvider from 'components/ThemeProvider';
import { tokens } from 'components/ThemeProvider/theme';
import VisuallyHidden from 'components/VisuallyHidden';
import { useLocalStorage } from 'hooks';
import { Fragment, Suspense, createContext, lazy, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import prerender from 'utils/prerender';
import { msToNum } from 'utils/style';
import { reflow } from 'utils/transition';
import PredictorProjectPDF from 'assets/Predictor Project Booklet.pdf';

const Home = lazy(() => import('pages/Home'));
const Page404 = lazy(() => import('pages/404'));

export const AppContext = createContext();
export const TransitionContext = createContext();

const App = () => {
  const [storedTheme] = useLocalStorage('theme', 'dark');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!prerender) {
      //console.info(`${repoPrompt}\n\n`);
    }
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    dispatch({ type: 'setTheme', value: storedTheme });
  }, [storedTheme]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <ThemeProvider themeId={state.theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Fragment>
      <Helmet>
        <link rel="canonical" href={`https://xfayne.github.io${pathname}`} />
      </Helmet>
      <VisuallyHidden showOnFocus as="a" className="skip-to-main" href="#MainContent">
        Skip to main content
      </VisuallyHidden>
      <Navbar location={location} />
      <TransitionGroup component="main" className="app" tabIndex={-1} id="MainContent">
        <Transition
          key={pathname}
          timeout={msToNum(tokens.base.durationS)}
          onEnter={reflow}
        >
          {status => (
            <TransitionContext.Provider value={{ status }}>
              <div className={classNames('app__page', `app__page--${status}`)}>
                <Suspense fallback={<Fragment />}>
                  <Routes location={location} key={pathname}>
                    <Route path="/" element={<Home />} />
                   {/* <Route path="/contact" element={<Contact />} />
                    <Route path="/projects/smart-sparrow" element={<ProjectSPR />} />
                    <Route path="/projects/slice" element={<ProjectSlice />} />
                    <Route
                      path="/projects/volkihar-knight"
                      element={<ProjectVolkihar />}
                    />
                     <Route path="/articles" element={<Articles} /> />
                    <Route path="/uses" element={<Uses />} /> */}
                    <Route path="*" element={<Page404 />} />
                  </Routes>
                </Suspense>
              </div>
            </TransitionContext.Provider>
          )}
        </Transition>
      </TransitionGroup>
    </Fragment>
  );
};

export default App;
