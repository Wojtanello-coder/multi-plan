import "./Comps.css";
import "./Plan.css";

import { useState } from "react";

function Plan(props){
    console.log(props.data)

    const newArr = [];
    while(props.data.lesson.length) newArr.push(props.data.lesson.splice(0,props.data.dayLength));

    function LessonShorten(x){
        let result = x[0];
        let flag = false;
        for(let i = 0; i < x.length; i++){
            if(flag){
                 result += x[i];
                 flag = false;
            }
            if(x[i] == " ") flag = true;
        }

        return result;
    }

    return(
        <div id="plan">
 
            {/* {JSON.stringify(props.data)} */}
            <table>
                <tbody>
                    
                    {newArr.map((row, id) => (
                        <tr key={id}>
                            {row.map((cell, id) => (
                                <td key={id}>
                                    {/* dont display empty cells */}
                                    {cell.length==0?(<div/>):(
                                    cell.length==4?(
                                        // JEDNA GRUPA
                                        <div className="cell_border">
                                            <div className="plan_cell">
                                                {/* przedmiot */}
                                                <span className="subj">{LessonShorten(cell[2])}</span><br/>
                                                {/* grupy */}
                                                <span className="group">{cell[3]}</span><br/>
                                                <span classname="classroom">{cell[1]}</span>
                                            </div>
                                        </div>
                                        
                                    ):(
                                        // DWIE GRUPY
                                        <div className="cell_border">
                                            <div className="plan_cell_double">
                                                {/* przedmiot */}
                                                <span className="subj">{LessonShorten(cell[2])}</span><br/>
                                                {/* grupa */}
                                                <span className="group">{cell[3]}</span><br/>
                                                <span className="classroom">{cell[1]}</span>
                                            </div>
                                            <div className="plan_cell_double">
                                                {/* przedmiot */}
                                                <span className="subj">{LessonShorten(cell[6])}</span><br/>
                                                {/* grupa */}
                                                <span className="group">{cell[7]}</span><br/>
                                                <span className="classroom">{cell[5]}</span>
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