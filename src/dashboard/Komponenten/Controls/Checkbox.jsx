import { useId } from 'react'

export function Checkbox({ label, checked, onChange }) {
    const id = useId();

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="checkbox" checked={checked} onChange={onChange} />
        </>
    );
}