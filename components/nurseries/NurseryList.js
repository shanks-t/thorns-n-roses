import React, { useEffect, useState } from "react"
import { getNurseries } from "./NurseryApi"


export const NurseryList = () => {
    const [ nurseries, setNurseries ] = useState([])


    useEffect(
        () => {
            
            getNurseries()
            .then((data) => {
                setNurseries(data)
            })
        
        },
        []
    )
    useEffect(
        () => {
            console.log("nurseries changed: ", nurseries)
        
        },
        [nurseries]
    )
        return (
            <>
            <h2>Nuseries</h2>
            {
                nurseries.map(
                (nursery) => {
                    return <h2>{nursery.businessName}</h2>
                }
            )
            }
        </>
        )

}
