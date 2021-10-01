import * as React from "react"
import { getRandomIntInclusive } from "../utils";
import _ from "lodash";

const rollD20 = getRandomIntInclusive(1,20)

const obj = {
    one: {
        two: {
            three: "stuff"
        }
    }
}

export default function Component () {
    const result = _.get(obj, "one.two.three")
    console.log(result);

    return (
        <div>
            <h1>Title here</h1>
            <h2>Roll was: {rollD20}</h2>
        </div>
    )
}