
import { useEffect, useState } from "react";

export default function useCrypto(cryptoDepndensie, deconstruction) {

    const [array, setNewArray] = useState([]);
    useEffect(() => {
        fetch(cryptoDepndensie)
            .then((resp) => resp.json())
            .then(deconstruction ? ({ status_updates }) => setNewArray(status_updates) : setNewArray);
    }, [setNewArray]);

    return [array, setNewArray]
}