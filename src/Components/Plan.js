import "./Comps.css";
import "./Plan.css";

function Plan(props){
    console.log(props.data)

    const newArr = [];
    while(props.data.lesson.length) newArr.push(props.data.lesson.splice(0,props.data.dayLength));
        
    console.log(newArr);
    //let table = new Array(props.data.dayLength);
    //console.log(table);

    // if(table[0] != undefined){
        
    //     for (let i = 0; i < props.data.lesson.length; i++) {
    //         if (table[i%props.props.data.dayLength[0]] == undefined){
    //             table[i%props.props.data.dayLength[0]] = [];
    //         }
    //         table[i%props.props.data.dayLength].append(props.data.lesson[i])
    //     }
    // }
    // let table = [];
    // if(props.data.length!=0){
    //     for (let i = 0; i < props.data.lesson.length; i++) {
    //         let tds = props.data.lesson.slice(i*props.data.dayLength[0], i*props.data.dayLength[0]);
    //         table.push(<tr> {tds} </tr>);
    //     }
    // }

    return(
        <div id="plan">
            {/* {JSON.stringify(props.data)} */}
            <table>
                <tbody>
                    
                    {newArr.map((row, id) => (
                        <tr key={id}>
                            {row.map((cell, id) => (
                                <td key={id}>
                                    {cell.length==4?(
                                        // JEDNA GRUPA
                                        <div className="plan_cell">
                                            {/* imie i nazwisko */}
                                            <span className="name">{cell[0]}  </span>
                                            {/* sala */}
                                            <span className="room">{cell[1]}</span><br/>
                                            {/* przedmiot */}
                                            <span className="subj">{cell[2]}</span><br/>
                                            {/* grupy */}
                                            <span className="group">{cell[3]}</span>
                                        </div>
                                    ):(
                                        // DWIE GRUPY
                                        <div>
                                        <div className="plan_cell_double">
                                            {/* imie i nazwisko */}
                                            <span className="name">{cell[0]}  </span>
                                            {/* sala */}
                                            <span className="room">{cell[1]}</span><br/>
                                            {/* przedmiot */}
                                            <span className="subj">{cell[2]}</span><br/>
                                            {/* grupa */}
                                            <span className="group">{cell[3]}</span><br/>
                                        </div>
                                        <div className="plan_cell_double">
                                            {/* imie i nazwisko */}
                                            <span className="name">{cell[4]}  </span>
                                            {/* sala */}
                                            <span className="room">{cell[5]}</span><br/>
                                            {/* przedmiot */}
                                            <span className="subj">{cell[6]}</span><br/>
                                            {/* grupa */}
                                            <span className="group">{cell[7]}</span>
                                        </div>
                                        </div>  
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