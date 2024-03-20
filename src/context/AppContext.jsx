const { createContext, useState } = require("react");

export const AppContext = createContext();

const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);

    async function fetchBlogs(page=1){
        setLoading(true);
        const url = `${baseUrl}?page=${page}`

        try{
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);    
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        } 
        catch(error) {
            console.log("Error Occurs");
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }

        setLoading(false);
    }

    function pageHandler(page){
        setPage(page);
        fetchBlogs(page);
    }

    const value = {
        loading, setLoading,
        page , setPage,
        totalPages, setTotalPages,
        posts, setPosts,
        pageHandler, fetchBlogs
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}