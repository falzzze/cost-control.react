import { useState } from 'react';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostDiagram from './CostDiagram';

import './Costs.css';
import CostList from './CostList';

const Costs = (props) => {

  const [ year, setYear ] = useState('2023')

  const yearChangeHandler = (year) => {
    setYear(year)
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === year
  });

  
  return (
    <div>
      <Card className='costs'>
        <CostsFilter year={year} onChangeYear={yearChangeHandler} />
        <CostDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts}/>
      </Card>
    </div>
  )
}


export default Costs;