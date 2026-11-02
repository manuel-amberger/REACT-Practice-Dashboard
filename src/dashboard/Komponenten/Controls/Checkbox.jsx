import { useId } from 'react'

export function Checkbox({ label, checked, onChange }) {
    const id = useId();

    return (
        <>
            <input id={id} type="checkbox" checked={checked} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </>
    );
}