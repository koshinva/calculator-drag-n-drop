import { FC } from 'react'

const operators = ['/', 'x', '-', '+'];

const Operators: FC = () => {
  return <div className="operators">
    <div className="operators__body">
      {operators.map((o, index) => (
        <button className="operators__button button-calculator" key={index}>{o}</button>
      ))}
    </div>
  </div>;
}

export default Operators