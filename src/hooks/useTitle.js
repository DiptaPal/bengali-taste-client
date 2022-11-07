import {useEffect} from "react"
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Bangoli Taste`;
    },[title])
}

export default useTitle;