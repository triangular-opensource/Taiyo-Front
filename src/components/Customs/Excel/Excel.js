import { React, useState, useEffect} from "react";
import "./Excel.css"
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const Excel = ({fileLink}) => {
    const [rows, setrows] = useState([]);
    const [cols, setcols] = useState([]);

    useEffect(() => {
        const fileHandler = async () => {
            let fileObj = await fetch(fileLink).then(r => r.blob())
            ExcelRenderer(fileObj, (err, resp) => {
                if (err) {
                    console.log(err);
                } else {
                    setrows(resp.rows);
                    setcols(resp.cols);
                }
            });
        }
        fileHandler();
    }, [fileLink])


    return (
        <div>
            <OutTable
                data={rows}
                columns={cols}
                tableClassName="ExcelTable2007"
                tableHeaderRowclassName="heading"
            />
        </div>
    );
}

export default Excel;
