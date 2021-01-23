//Making a custom hook
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs on every render by default, dependency is [] runs only on init render (state doesn't change)
  // useEffect always changes when dependency value is changed. useEfect fetch data.
  useEffect(() => {
    const abortCtrl = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })    //fetch data from uel 
      .then(res => {                              //get response obnject
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();                        //use json method on response
      })
      .then(data => {                             //use another then method to get data
        setData(data);                            //use data
        setIsPending(false);                      //setIsPenging(false) while data is fetched
        setError(null);                           //setError(null)
      })
      .catch(err => {                             // auto catches network / connection error
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setIsPending(false);                      //Do not show Loading data.. if error occurs
          setError(err.message);                    //catch any network error messages
        }
      })
    }, 1000);                                     //setTimeout(1000ms) Loading data... then fetch data
    return () => abortCtrl.abort();               //abort fetch process
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;