import { useState } from "react"


export const useForm = (initialState={}) => {

    const [values, setvalues] = useState(initialState)

    const reset =()=>{
        setvalues(initialState)
    }
 
    const handleInputChange=({target})=>{
 
        setvalues({
            ...values,
            [target.name]:target.value
        })

    }

    return [values,handleInputChange,reset]

}
 //Forma de Uso en la aplicacion
 
//   const [formValues,handleInputChange,reset] = useForm({
//     search:''
// })

// const {search} =formValues;
