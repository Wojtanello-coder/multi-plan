// import "./Comps.css";
import "./Plan.css";

import { useState } from "react";

function Plan(props){
    // console.log(props.data)

    let hoursvis = false;

    const newArr = [];
    if(props.data.lesson){
        while(props.data.lesson.length) newArr.push(props.data.lesson.splice(0,props.data.dayLength));
    }
    const dayLength = props.data.dayLength;
    let hourstab = [];
    for(let i = 0; i < dayLength; i++){
        hourstab[i] = i;
    }
    console.log(hourstab);



    // skraca stringa
    function Shorten(x){
        let result = x[0];
        let flag = false;
        for(let i = 0; i < x.length; i++){
            if(flag){
                 result += x[i];
                 flag = false;
            }
            if(x[i] === " ") flag = true;
        }

        return result;
    }

    // wypis grupy
    function Grouper(x){
        if(x === "1. Grupa") return "g1";
        if(x === "2. Grupa") return "g2";
        if(x === "Cała klasa") return "ck";
        else return "";
    }

    let i = 1;
    function Day(x){
        if(x == 1) return "Pon";
        if(x == 2) return "Wt";
        if(x == 3) return "Śr";
        if(x == 4) return "Czw";
        if(x == 5) return "Pt";
        else return "Idk tbh"
    }

    function HourTime(x){
        if(x == 0) return "6:55 - 7:40";
        if(x == 1) return "7:45 - 8:30";
        if(x == 2) return "8:40 - 9:25";
        if(x == 3) return "9:35 - 10:20";
        if(x == 4) return "10:30 - 11:15";
        if(x == 5) return "11:30 - 12:15";
        if(x == 6) return "12:25 - 13:10";
        if(x == 7) return "13:20 - 14:05";
        if(x == 8) return "14:15 - 15:00";
        if(x == 9) return "15:05 - 15:50";
        if(x == 10) return "15:55 - 16:40";
        else return "16:45 - 17:30";
    }
    
    return(
        <div id="plan">
            {hoursvis = true}
 
            {/* {JSON.stringify(props.data)} */}
            <table>
                <tbody>
                    <tr id="hours" className={hoursvis?(""):("idk")}>
                        <td >Godziny:</td>
                        {hourstab.map((i) => (
                            
                            <td className="cell_border">
                                <div>{i}</div>
                                {HourTime(i)}
                            </td>
                        ))}
                    </tr>
                    
                    {newArr.map((row, id) => (
                        <tr key={id}>
                            <td className="cell_border">
                                <div className="day_cell plan_cell">
                                    {Day(i)}
                                    <span className="idk">
                                        {i++}
                                    </span>
                                    
                                </div>
                            </td>
                            {row.map((cell, id) => (
                                
                                <td key={id}>
                                   
                                    {cell.length===0?(
                                    <div className="cell_border">
                                        <div className="plan_cell"/>
                                    </div>
                                        ):(
                                    cell.length===4?(

                                        // JEDNA GRUPA
                                        <div className="cell_border">
                                            <div className="plan_cell">
                                                <div className="cell_header">
                                                    {/* grupy */}
                                                    <p className="group">{Grouper(cell[3])}</p>
                                                    {/* Nauczyciel */}
                                                    <p className="teacher">{Shorten(cell[0])}</p>
                                                    {/* sala */}
                                                    <p className="classroom">{cell[1]}</p>
                                                </div>
                                                <div className="cell_body1">
                                                    {/* przedmiot */}
                                                    <p className="subj">{Shorten(cell[2])}</p>
                                                </div>          
                                            </div>
                                        </div>
                                        
                                    ):(

                                        // DWIE GRUPY
                                        <div className="cell_border">
                                            <div className="plan_cell_double double1">
                                                <div className="cell_header">
                                                    {/* grupa */}
                                                    <p className="group">{Grouper(cell[3])}</p>
                                                    {/* nauczyciel */}
                                                    <p className="teacher">{Shorten(cell[0])}</p>
                                                    {/* sala */}
                                                    <p className="classroom">{cell[1]}</p>
                                                </div>
                                                <div className="cell_body2">
                                                    {/* przedmiot */}
                                                    <p className="subj">{Shorten(cell[2])}</p>
                                                </div>
                                            
                                                
                                            </div>
                                            <div className="plan_cell_double double2">
                                                
                                                <div className="cell_header">
                                                    {/* grupa */}
                                                    <p className="group">{Grouper(cell[7])}</p>
                                                    {/* Nauczyciel */}
                                                    <p className="teacher">{Shorten(cell[4])}</p>
                                                    {/* sala */}
                                                    <p className="classroom">{cell[5]}</p>
                                                </div>
                                                <div className="cell_body2">
                                                    {/* przedmiot */}
                                                    <p className="subj">{Shorten(cell[6])}</p>
                                                </div>
                                            </div>
                                        </div>  

                                    )
                                    )}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Plan;