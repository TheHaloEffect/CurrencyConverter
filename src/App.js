import Currency from './components/Currency';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1> Currency Converter </h1>
      <Currency />
      <div className="equals-sign"> = </div>
      <Currency />
    </div>
  );
}

export default App;
