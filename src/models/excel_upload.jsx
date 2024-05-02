import { useState } from 'react';
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';

function Excel_Upload() {

    const [initialData, setInitialData] = useState(undefined);
    const [currentSheet, setCurrentSheet] = useState({});
    // get excel input cell info with api
    const getCellInfo = (cellName) => {

        return cellName.startsWith('!') || cellName.startsWith('A') || cellName.startsWith('B') || cellName.startsWith('C');
        //return ['A', 'B', 'C', 'D']
    };
    const handleUpload = (event) => {
        const file = event.target.files[0];
        //read excel file
        readFile(file)
            .then(
                (readedData) => {
                    // read ex
                    const sheet = readedData.Sheets[readedData.SheetNames[0]];
                    console.log(getCellInfo, readedData, sheet);
                    for (let cell in sheet) {
                        if (!getCellInfo(cell)) {
                            delete sheet[cell];
                        }
                        console.log('cell is', cell, sheet[cell]);
                    }
                    if (readedData.SheetNames.length > 0) {
                        //delete sheet, not 0 sheet
                        for (let sheetIndex = 1; sheetIndex < readedData.SheetNames.length; sheetIndex++) {
                            delete readedData.Sheets[readedData.SheetNames[sheetIndex]];
                        }
                    }
                    //delete readedData.SheetNames;
                    setInitialData(readedData)
                    //get excel information with readedData
                }
            )
            .catch((error) => console.error(error));
    };

    const save = () => {
        const result = generateObjects(currentSheet);
        //save array of objects to backend
    };

    return (
        <>
            <div className="modal">
                <div className="modal-content">excel upload.jsx</div>
                <input
                    type='file'
                    accept='.xlsx,.xls,.csv'
                    onChange={handleUpload}
                />
                <ReactExcel
                    initialData={initialData}
                    onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
                    activeSheetClassName='active-sheet'
                    reactExcelClassName='react-excel'
                />
                <button onClick={save}>
                    Save to API
                </button>
            </div>
        </>
    );
}

export default Excel_Upload;