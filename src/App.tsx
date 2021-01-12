import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.css';
import MainTitle from './components/elements/MainTitle';
import { Home } from './components/pages/Home';
import { AppContext } from './contexts/app.context';

const Content = styled.div`
  max-width: 600px;
  margin: auto;
`;

const LightTheme = {
  backgroundColor: '#fff',
  color: 'rgba(0,0,0,.87)',
};

const DarkTheme = {
  backgroundColor: '#222',
  color: '#fff',
};

type Theme = typeof LightTheme;

const GlobalStyle = createGlobalStyle<{ theme: Theme; }>`
  body{
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
  }
`;

function App() {

  const appContext = {
    settings: {
      theme: 'dark',
    },
    setSettings: () => { },
  };

  return (
    <AppContext.Provider value={appContext}>
      <ThemeProvider theme={DarkTheme}>
        <Content>
          <GlobalStyle />
          <MainTitle>Frameworks Comparison</MainTitle>
          <BrowserRouter>
            {
              /* <nav>
                <Link to="/home">Home</Link>
              </nav> */
            }
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="*">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </BrowserRouter>
        </Content>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
