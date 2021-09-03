import React, { useEffect, useState } from "react"
import { getFetch } from "../NurseryApi"


export const NurseryList = () => {
    const [ nurseries, setNurseries ] = useState({}


    const getNurseries = () => {
        return  getFetch(`http://localhost:8088/nurseries`)
        .then(res => res.json())
        .then((data) => {
            setNurseries(data)
        })
    }
    useEffect(
        () => {
            getNurseries()
        },
        []
    )
        return (
            <>
            <h2>Nuseries</h2>
            {
                nurseries.map(
                (nursery) => {
                    return <p>{nursery.businessName}</p>
                }
            )
            }
        </>
        )

}
