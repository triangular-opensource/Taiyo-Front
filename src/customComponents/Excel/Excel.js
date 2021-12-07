import {React , useState} from 'react';
import {OutTable , ExcelRenderer} from 'react-excel-renderer';




function Excel(){
    const [rows, setrows] = useState(Array());
    const [cols, setcols] = useState(Array());

function fileHandler(event){
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => 
    {
      if(err){
        console.log(err);            
      }
      else{
        // this.setState({
        //   cols: resp.cols,
        //   rows: resp.rows
        // });
        setrows(resp.rows);
        setcols(resp.cols);
        console.log(resp.rows);
        console.log(resp.cols);
      }
    });               
  }

    return (
        <div>
        <input type="file" onChange={fileHandler.bind()} style={{"padding":"10px"}} />
        <OutTable data={rows} columns={cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> 
        </div>
    )
}

export default Excel
