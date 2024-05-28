
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
        </div>
    );
}