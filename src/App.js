import Costs from './components/Costs/Costs';

function App() {

  const costs = [
    {
      date: new Date(2022, 2, 12),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      date: new Date(2022, 11, 25),
      description: 'MacBook',
      amount: 1254.99,
    },
    {
      date: new Date(2022, 4, 1),
      description: 'Джинсы',
      amount: 49.99,
    }
  ]


  return (
    <div className="App">
      <h1>Starting!</h1>
      <Costs costs={costs}/>
    </div>
  );
}



export default App;
