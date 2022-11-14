import { useState } from "react";

// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({target}) => {

        setInputValue(target.value);
    }

    const onSumbit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());

        setInputValue('');
    };

    return(
        <form onSubmit={onSumbit} >
            <input type="text" placeholder="Buscar gifs"
                value={ inputValue } 
                onChange = { onInputChange } 
            />
            
        </form>
    )
}