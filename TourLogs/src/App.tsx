import { useEffect, useState } from 'react'
import './App.css'
import Spinner from '../component/spinner';
import Logs from '../component/Logs'

const url = "https://api.npoint.io/c84dbf06bdbaa98053bc"

const App = () => {

  const[loading, setLoading] = useState(true); 
  const[tours, setTours] = useState([]); 


  const fetchTours = async () => {
    // will use later
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };


  const removeTour = (id: any) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect( () =>{
    fetchTours();
  },[])


  if (loading) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Logs tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App
