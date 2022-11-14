import { useState } from "react";
import {AddCategory} from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);
    //const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        // setCategories([...categories,'Hola Mundo'])
        setCategories([newCategory,...categories])
        // setCategories( cat => [...cat, 'Valorant']);
    };
    //console.log(categories);
    return (

        
        <>
        <h1>GifExpertApp</h1>
        

        <AddCategory 
            // setCategories = { setCategories} 
            onNewCategory= { (value) => onAddCategory(value)}
           //onNewCategory= { onAddCategory}
        />

        {categories.map( category => {
            return <GifGrid key={category} category={category} />
        })}

        </>

    );  
};