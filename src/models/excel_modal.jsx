import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import PropTypes from 'prop-types';

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};
function Modal({ isOpen, onClose }) {
    const [data, setData] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, text/csv',
        onDrop: (acceptedFiles) => {
            acceptedFiles.forEach((file) => {
                const reader = new FileReader();
                reader.parseFiles(file, (result) => {
                    if (result.error) {
                        console.error(result.error);
                        return;
                    }
                    console.log(result.data);
                    const formattedData = result.data.map((row) => {
                        // Process and transform the Excel data here
                    });
                    setData(formattedData);
                });
            });
        },
    });

    console.log('test 1', isOpen, onClose, getRootProps, getInputProps, data);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Modal Title</h2>
                <p>Modal Content</p>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag n drop some files here, or click to select files</p>
                    <ReactExcel
                        initialData={setData}
                        onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
                        activeSheetClassName='active-sheet'
                        reactExcelClassName='react-excel'
                    />
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;