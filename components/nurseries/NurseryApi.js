// import React, { useState } from "react"


export const getNurseries = () => {
    return fetch(`http://localhost:8088/nurseries`)
    .then(res => res.json())
}
