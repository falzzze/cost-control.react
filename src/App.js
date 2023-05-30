import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

function App() {

  const costs = [
    {
      id: 'c1',
      date: new Date(2022, 2, 12),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2022, 11, 25),
      description: 'MacBook',
      amount: 1254.99,
    },
    {
      id: 'c3',
      date: new Date(2022, 4, 1),
      description: 'Джинсы',
      amount: 49.99,
    }
  ];


  const addCostHandler = (cost) => {
    console.log('App');
  }


  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}



export default App;
