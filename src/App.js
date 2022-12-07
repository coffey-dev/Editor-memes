import './App.css';
import React, {useState} from 'react';
import html2canvas from 'html2canvas';



const App = () => {

  const[imgmeme,setImgmeme] = useState(1);
 
   const[txtmeme,setTxtmeme] = useState("");

   const[txtmeme2,setTxtmeme2] = useState("");

   const[txtformato,setTxtformato] = useState("Impact");

   const[txtAlinearH,setTxtAlinearH] = useState(3);

  const[txtcolor,setTxtcolor] = useState("");

  
{/*  
  const[txtAlinearV,setTxtAlinearV] = useState(1);
  const[txtAlinearH,setTxtAlinearH] = useState(1);
*/}

  const seleccionarImg = (e) => {
            setImgmeme(e.target.value);
        }

    
  const ingresarTexto = (e) => {
            setTxtmeme(e.target.value);
        }

        const ingresarTexto2 = (e) => {
          setTxtmeme2(e.target.value);
      }


  const cambiarColorTexto = (e) =>{
            setTxtcolor(e.target.value);
        }
    


  const formatearTexto = (e) =>{
            setTxtformato(e.target.value);
        }

        
    const alinearTexto = (e) => {
            setTxtAlinearH(e.target.value)
        }


  
    const descargarMeme = () => {
            html2canvas(document.querySelector("#exportarImg")).then(canvas => {
               let link = document.createElement('a'); 
                link.href = canvas.toDataURL();
                link.download = 'meme.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
          }
        


  return (
  
<div className="container">
  
  <div className="figure" id="exportarImg">
    
   
    <div id="divContenedor" style={{backgroundImage: `url(./memes/${imgmeme}.jpg)`, backgroundRepeat: 'no-repeat'}} >
    
      <p id="divHijo" style={{gridColumn: `${txtAlinearH}`, gridRow: "1", color: `${txtcolor}`, fontFamily: `${txtformato}`, fontSize: "50px", textAlign: "center"}}>{txtmeme}</p>


      <p id="divHijo" style={{gridColumn: `${txtAlinearH}`, gridRow: "4", color: `${txtcolor}`, fontFamily: `${txtformato}`, fontSize: "50px", textAlign: "center"}}>{txtmeme2}</p>
   
      

    </div>

  </div>

  <div className="choose">
  <select onChange={seleccionarImg} >
        <option value={1}>Laughing</option>
        <option value={2}>Upset</option>
        <option value={3}>Driving</option>
        <option value={4}>Sisters</option>
        <option value={5}>Thrilled</option>
        <option value={6}>Obsessed</option>
        <option value={7}>Knife</option>
        <option value={8}>Mad</option>
        <option value={9}>Axe</option>
        <option value={10}>Frozen</option>
  </select>
  
  </div>
  
  <div className="modify">
   <h1>Ingresá el texto deseado</h1>
  
   <input 
            onChange={ingresarTexto} 
            type="text" 
            placeholder="Texto superior" 
            name="meme" 
            arial-label="default input example" >

    </input>
<hr />
    <input 
            onChange={ingresarTexto2} 
            type="text" 
            placeholder="Texto inferior" 
            name="meme2" 
            arial-label="default input example" >

    </input>
<hr />
    <select onChange={formatearTexto} >
        <option value={"Times New Roman"}>Times New Roman</option>
        <option value={"Courier New"}>Courier New</option>
        <option value={"Palatino"}>Palatino</option>
        <option value={"Garamond"}>Garamond</option>
        <option value={"Bookman"}>Bookman</option>
        <option value={"Avant Garde"}>Avant Garde</option>
        <option value={"Verdana"}>Verdana</option>
        <option value={"Georgia"}>Georgia</option>
        <option value={"Comic Sans MS"}>Comic Sans MS</option>
        <option value={"Trebuchet MS"}>Trebuchet MS</option>
        <option value={"Arial Black"}>Arial Black</option>
        <option value={"Impact"}>Impact</option>
      
  
  </select>
<hr />

  <select onChange={alinearTexto} >
        <option value={1}>Izquierda</option>
        <option value={3}>Centro</option>
        <option value={4}>Derecha</option>
 
  </select>

<hr />

  <input onChange={cambiarColorTexto}  type="color" id="favcolor" name="favcolor" value="#ff0000" />

  </div>
  
  <div className="export">

        
        <button onClick={descargarMeme} type="button">descargar</button>
  </div>

</div>
  );
  }

export default App;
