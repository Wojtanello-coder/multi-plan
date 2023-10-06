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
            {props.data.lesson}
            <table>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Plan;