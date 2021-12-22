import { React, useState } from "react";
import "./Excel.css"
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const Excel = () => {
    const [rows, setrows] = useState([]);
    const [cols, setcols] = useState([]);

    const fileHandler = (event) => {
        let fileObj = event.target.files[0];
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                setrows(resp.rows);
                setcols(resp.cols);
            }
        });
    }

    return (
        <div>
            <input
                type="file"
                onChange={fileHandler.bind()}
                style={{ padding: "10px" }}
            />
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
