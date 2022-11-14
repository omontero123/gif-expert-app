import { useEffect, useState } from 'react';
import { getGifs } from "../helpers/getGifs";
// un hook es una funcion"orden superior"
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages =  await getGifs(category)
        setImages(newImages);
        setIsLoading(false);
    }
    //ejecutar consulta a api la primera vez que se hace el return
    useEffect(()=>{
        getImages();
    }, [])

    return {
        images,
        isLoading,
    } 
}
