
import React from 'react'
import Log from './Log';

type Tour = {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
};

type LogsProps = {
  tours: Tour[];
  removeTour: (id: string) => void;
};

const Logs: React.FC<LogsProps> = ({ tours, removeTour }) => {
    return (
      <section>
        <div className='title'>
          <h2>Travel Logs</h2>
          <div className='title-underline'></div>
        </div>
        <div className='tours'>
          {tours.map((tour) => {

            
            return <Log key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    );
  };
  
export default Logs
