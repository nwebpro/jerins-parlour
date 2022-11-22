
import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Jerin's Parlour Beauty Salon For Every Women`
    }, [title])
}

export default useSetTitle