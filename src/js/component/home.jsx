import React , {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	 function  cambiarcolor1 () {
	 	
		 setRojo(rojo === "btn btn-danger rounded-button" ? "luzroja" : "btn btn-danger rounded-button"); 
	 }
	 function  cambiarcolor2 () {
	 	setAmarillo (amarillo === "btn btn-warning rounded-button" ? "luzamarilla" : "btn btn-warning rounded-button");
	 }
	 function  cambiarcolor3 () {
	 	setVerde (verde === "btn btn-success rounded-button" ? "luzverde" : "btn btn-success rounded-button"); // esta logica para que se vea primero el circulo, si pulso el boton la luz y si no el circulo default
	}
	
const [rojo , setRojo]= useState("btn btn-danger rounded-button") // dentro del prentesis de useState iria como se veria inicialmente
const [amarillo , setAmarillo]= useState("btn btn-warning rounded-button")
const [verde , setVerde]= useState("btn btn-success rounded-button")





	return (
		
		<div>
      {/* Soporte del semáforo */}
      <div className="soporte"></div>

		<div className="card" style={{width: '5rem'}}>
  <div className="card-header" style= {{width: '5rem'}}>
     </div>
 
  <div className="container">
  <ul className="list-group list-group-flush">
    {/* <div classNameName= {"luzroja"} onClick={increment}> */}
	
	<button type="button" className={rojo} onClick={cambiarcolor1}></button>

	<button type="button" className={amarillo} onClick={cambiarcolor2} ></button>
	
	{/* <div className={verde}>  comento esto para que no se vean 2 circulos */}
	<button type="button" className={verde} onClick={cambiarcolor3}></button>
	
  </ul></div>
  
</div>
</div>
		
	);
};


export default Home;
