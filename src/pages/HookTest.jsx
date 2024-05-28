import { useState, useCallback } from 'react';

export default function HookTest() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [textList, setTextList] = useState(['1', '2', '3']);
    const [textList2, setTextList2] = useState(['a', 'b', 'c']);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const addText = () => {
        setTextList([...textList, text]);
        setText('');
    }

    const addText2 = useCallback(() => {
        setTextList2([...textList2, text]);
        setText('');
    }, [text, textList2]);

    return (
        <div>
            <h1>Hook Test</h1>
            <div>
                <h2>Counter</h2>
                <div>
                    <span>{count}</span>
                    <button onClick={increase}>+</button>
                    <button onClick={decrease}>-</button>
                </div>
            </div>
            <div>
                <h2>Input Text</h2>
                <div>
                    <input type="text" value={text} onChange={handleChange} />
                    <button onClick={addText}>Add</button>
                </div>
                <div>
                    <ul>
                        {textList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <h2>Input Text with useCallback</h2>
                <div>
                    <input type="text" value={text} onChange={handleChange} />
                    <button onClick={addText2}>Add</button>
                </div>
                <div>
                    <ul>
                        {textList2.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}