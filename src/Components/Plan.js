import "./Comps.css";

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
                                        <div>
                                            {cell[0]} <hr/>
                                            {cell[1]} <hr/>
                                            {cell[2]} <hr/>
                                            {cell[3]}
                                        </div>
                                    ):(
                                        <div>
                                            {cell[0]} <hr/>
                                            {cell[1]} <hr/>
                                            {cell[2]} <hr/>
                                            {cell[3]} <hr/> <hr/>
                                            {cell[4]} <hr/>
                                            {cell[5]} <hr/>
                                            {cell[6]} <hr/>
                                            {cell[7]}
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