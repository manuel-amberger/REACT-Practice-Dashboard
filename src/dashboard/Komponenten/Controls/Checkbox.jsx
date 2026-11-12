import { useId } from 'react'

export function Checkbox({ label, checked, onChange, className }) {
    const id = useId();

    return (
        <>
            <input id={id} class={className} type="checkbox" checked={checked} onChange={onChange} />
            <label htmlFor={id} class="checkboxLabel">{label}</label>
        </>
    );
}