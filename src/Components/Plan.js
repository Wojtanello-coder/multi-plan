function Plan(props){
    console.log(props.data)
    let table = [];
    if(props.data.length!=0){
        for (let i = 0; i < props.data.lesson.length; i++) {
            let tds = props.data.lesson.slice(i*props.data.dayLength[0], i*props.data.dayLength[0]);
            table.push(<tr> {tds} </tr>);
        }
    }
    return(
        <div id="plan">
            <table>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
}

export default Plan;