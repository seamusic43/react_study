import { useState, useCallback, useMemo } from "react";

export default function RadioTest() {
    const radioList = useMemo(() => {
        return [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Cherry', value: 'cherry' },
            { label: 'Durian', value: 'durian' },
        ];
    }, []);

    //const [radioSelect, setRadioSelect] = useState(radioList[0].value || '');
    /*
    const onChange = useCallback((e) => {
        setRadioSelect(e.target.value);
    }, []);
    */
    const [radioIndex, setRadioIndex] = useState(0);
    const onChange = useCallback((index) => () => setRadioIndex(index), []);
    const radioInputs = useMemo(
        () => radioList.map((item, index) => (
            <label key={index} className="flex justify-start cursor-pointer label">
                <input type="radio" onChange={onChange(index)} id={item.value} name="fruit" className="mr-4 radio radio-primary" defaultValue={item.value} checked={index === radioIndex} />
                <span className="label-text">{item.label}</span>
            </label>
        )), [radioList, onChange, radioIndex]
    )

    return (
        <div>
            <h1>Radio Test</h1>
            <div> selected : {radioList[radioIndex].label}</div>
            <div>
                <div className="flex flex-col mt-4">{radioInputs}</div>
            </div>
        </div>
    );
}