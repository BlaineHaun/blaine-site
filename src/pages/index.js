import * as React from "react"
import { getRandomIntInclusive } from "../utils";

const rollD20 = getRandomIntInclusive(1,20)

export default function Component () {
    return (
        <div>
            <h1>Title here</h1>
            <h2>Roll was: {rollD20}</h2>
        </div>
    )
}