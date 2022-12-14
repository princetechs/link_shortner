import { useState } from "react";

export default function useinput(initialValue : any) {

    const [value, setValue] = useState(initialValue);
    
    const handleChange = (event :any) => {
        setValue(event.target.value);
        
    };

    return {
        value,
        onChange: handleChange
    };
 
}

