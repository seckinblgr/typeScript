
import './App.css';

const  App:React.FC = () => {

  let name: string = "Seçkin Bulgur";
  let age: number = 24;
  let year: number = 2023;
  let isActive: boolean = true;
  let month: string | number = 52; 


  type types ={
    year: number,
    age:number,
  }

  //interface type 

  interface personType {
    name: string,
    surname: string,
    city: string,
    phone: string | number,
    isMarried?: boolean,          // ?  == is a optional value;
    hobies: Array<string>,
  }

  //type2 extends type 
  interface personType2 extends personType {
    isActive?: boolean
  }
 
  let person: personType2 = {
    name: "Seçkin",
    surname: "Bulgur",
    city: "Istanbul",
    phone: 5467355117,
    isMarried:false,
    hobies: ["Swim","Travel","Movie"],
  }
  console.log(typeof(person.hobies))
  
  return (
    <div className="App">
      <h1>TypeScript</h1>
      <span>{name +", "+ age}</span> 
      <br />
      <span>{year}</span>
      {isActive}

      
      
    </div>
  );
}

export default App;
