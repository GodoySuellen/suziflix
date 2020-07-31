import React from "react";

function FormField({label, type, name, cor, value, onChange}) {
    return (
        <div>
            <label>
               {label}
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField