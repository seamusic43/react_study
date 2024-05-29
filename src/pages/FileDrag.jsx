import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { imageFileReaderP } from "@/pages/common/imageFileReaderP";

export default function FileDrag() {
    const onDragStart = (e) => {
        console.log('drag start', e.dataTransfer);
        //e.dataTransfer.setData('text', 'hello');
    }
    const onDragEnd = (e) => {
        console.log('drag end', e.dataTransfer);
    }
    const onDragOver = (e) => {
        e.preventDefault();
    }
    const onDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
    }

    const singleFileRef = useRef(null);
    const onSingleFileChange = useCallback(() => { singleFileRef.current?.click(); }, []);

    const multiFileRef = useRef(null);
    const onMultiDivClick = useCallback(() => { multiFileRef.current?.click(); }, []);

    const [multiImageUrls, setMultiImageUrls] = useState([]);
    const makeMultiImageUrls = useCallback((files) => {
        const promises = Array.from(files).map(file => imageFileReaderP(file));
        Promise.all(promises).then((urls) => {
            setMultiImageUrls(multiImageUrls => [...urls, ...multiImageUrls]);
        });
    }, []);
    const onMultiInputChange = useCallback((e) => {
        const files = e.target.files;
        files && makeMultiImageUrls(files);
    }, [makeMultiImageUrls]);
    const onMultiDrop = useCallback((e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        files && makeMultiImageUrls(files);
    }, [makeMultiImageUrls]);
    const onMultiDragOver = useCallback((e) => { e.preventDefault(); }, []);

    return (
        <div>
            <p>DragDrop</p>
            <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
                <h1>File Drag</h1>
                <p>Drag and drop files here</p>
            </div>
            <div onDragOver={onDragOver} onDrop={onDrop}>
                <h1>Drop over Me</h1>
            </div>
            <div>
                <h1> File Input</h1>
                <input type="file" accept="image/*" className="hidden" ref={singleFileRef} />
                <Button onClick={onSingleFileChange}>Single File</Button>
            </div>
            <div className="mt-10">
                <h1>Multiple File Input</h1>
                <div onClick={onMultiDivClick} className="w-full mt-4 bg-gray-200 border border-gray-200">
                    <input type="file" ref={multiFileRef} onChange={onMultiInputChange} className="hidden" accept="image/*" multiple />
                </div>
                <div onDragOver={onMultiDragOver} onDrop={onMultiDrop} className="w-full bg-blue-300 border border-blue-300 h-40">
                    <h3> Drop File</h3>
                </div>
                <div className="flex flex-wrap">
                    {multiImageUrls.map((url, idx) => (
                        <img key={idx} src={url} alt={url} className="w-20 h-20 object-cover" />
                    ))}
                </div>
            </div>
        </div>
    );
}