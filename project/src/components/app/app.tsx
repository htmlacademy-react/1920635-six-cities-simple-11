import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  cardNumber: number;
}

function App({cardNumber}: AppScreenProps): JSX.Element {
  return (
    <MainPage cardsNumber={cardNumber}/>
  );
}

export default App;
