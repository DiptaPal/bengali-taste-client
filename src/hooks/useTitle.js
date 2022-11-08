import {useEffect} from "react"
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Bengali Taste`;
    },[title])
}

export default useTitle;