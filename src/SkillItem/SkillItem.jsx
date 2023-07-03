import React, { useEffect, useState } from 'react' //permite usar etiquetas HTML se usaran 3
import "./SkillItem.css"
export default function SkillItem(props){ //AQUI VAN FUNCIONES y clases. Esta es una función
    const {skillName,skillValor}=props;
    const [skillValue, setSkillValue] = useState(0);
    const handleClick = (event) => {
        let newValue = event;
        setSkillValue(newValue);
    }
    useEffect(() => {setSkillValue(skillValor)}, [skillValor]) // los cocrchetes cuadrados tienen 3 estados...1.continuo 2condicional y 3 unico son lo datos de entrada, corchetes normales son la función a realizar, corchetes cuadrados indican sobre que debe cambiar para que se active el use efect
    return (//AQUI VA TODO LO DE HTML
        <div className='skill-container'>
            <label className='tag-skill'>{skillName}</label>
            <div className="cuadrito" onClick={() => { handleClick(1) }} style={{ backgroundColor: skillValue <= 0 ? "#D9D9D9" : "blue" }} ></div>
            <div className="cuadrito" onClick={() => { handleClick(2) }} style={{ backgroundColor: skillValue <= 1 ? "#D9D9D9" : "blue" }}  ></div>
            <div className="cuadrito" onClick={() => { handleClick(3) }} style={{ backgroundColor: skillValue <= 2 ? "#D9D9D9" : "blue" }} ></div>
            <div className="cuadrito" onClick={() => { handleClick(4) }} style={{ backgroundColor: skillValue <= 3 ? "#D9D9D9" : "blue" }} ></div>
            <div className="cuadrito" onClick={() => { handleClick(5) }} style={{ backgroundColor: skillValue <= 4 ? "#D9D9D9" : "blue" }} ></div>
            <div className="cuadrito" onClick={() => { handleClick(6) }} style={{ backgroundColor: skillValue <= 5 ? "#D9D9D9" : "blue" }}></div>
            <div className="cuadrito" onClick={() => { handleClick(7) }} style={{ backgroundColor: skillValue <= 6 ? "#D9D9D9" : "blue" }}></div>
            <div className="cuadrito" onClick={() => { handleClick(8) }} style={{ backgroundColor: skillValue <= 7 ? "#D9D9D9" : "blue" }}></div>
            <div className="cuadrito" onClick={() => { handleClick(9) }} style={{ backgroundColor: skillValue <= 8 ? "#D9D9D9" : "blue" }}></div>
            <div className="cuadrito" onClick={() => { handleClick(10) }} style={{ backgroundColor: skillValue <= 9 ? "#D9D9D9" : "blue" }}></div>
        </div>
    );
}
SkillItem.defaultProps={skillName:"skillName",skillValor:0}