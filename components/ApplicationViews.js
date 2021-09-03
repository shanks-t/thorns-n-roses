import React from "react"
import { Route } from "react-router-dom"
import { NurseryList } from "./nurseries/NurseryList"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/nurseries">
                <NurseryList />
            </Route>
        
            <Route exact path="/distributors">

            </Route>

            <Route exact path="/retailers">

            </Route>
        </>
    )
}
