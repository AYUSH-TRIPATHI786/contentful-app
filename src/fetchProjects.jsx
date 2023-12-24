import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client =  createClient({
    space:'ueluzezpz9jq',
    environment:'master',
    accessToken: import.meta.env.VITE_API_KEY
});


export const useFetchProjects = ()=> {
    const [loading ,setLoading] = useState(true);
    const [projects ,setProjects] = useState([]);
    
    const getData = async () => {
        try {
            const response = await client.getEntries({content_type:'projects'})
            const newProjects = response.items.map((item)=>{
                const {title,url,image} = item?.fields
                const project = {
                    title :title,
                    url: url,
                    id: item?.sys?.id,
                    img: image?.fields?.file?.url
                }
                return project
            })
            setProjects(newProjects)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            
        }
    }
    useEffect(()=> {
        console.log(projects);
        getData()
    },[])

    return {loading,projects}
}
