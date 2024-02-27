import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
import Hello from "./assets/Hello";

function App() {
  const helloData = [
    {name: 'Wachiraya', surname: 'Srinual'},
    {name: 'Box', surname: 'Swan'}
  ];
  return (
    <div className='App'>
      <Counter/>
    {helloData.map((data, index) => (
      <Hello key={index} name={data.name} surname={data.surname} />
    ))}

    <Contact email ="s6506021620172@email.kmutnb.ac.ht" phone="061748258x"/>
    </div>
  );
}

export default App
