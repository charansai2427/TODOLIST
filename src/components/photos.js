import { useEffect , useRef, useState } from "react";
import{ v4 as uuid} from"uuid";
const PhotosPage = () =>{
    const[photos,setPhotos] = useState([]);
    const pageRef=useRef(1);
    const eleRef = useRef(null)
    const fetchData =async () =>{
        try{
            const res = await fetch(`https://api.unsplash.com/photos/?page=${pageRef.current}&client_id=uf6QbAuMcxxT5Jcz9L0-kE9Bigzy61zwG-mkVMp6JuM`);
            const data = await res.json();
            setPhotos([...photos,...data]);
        }catch(error){
            console.log(error);
        }
    }
    const handleScroll = (e) =>{

let totalH=(window.scrollHeight);
let totalScroll=(window.scrollY) + 745;
if(totalH-totalScroll < 0.2*totalH){
    pageRef.current += 1;
    fetchData(pageRef.current);
}
    }
    useEffect(() =>{
        fetchData(pageRef.current)
        window.addEventListener("scroll",(e) =>handleScroll(e));
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
},[])
return(
    <div ref={eleRef}>
        {photos.length && photos.map(e => <img src={e.urls.small} key={uuid()}/>)}
        </div>
    )
}

export default PhotosPage;


