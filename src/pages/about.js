import React from "react";
import _ from "lodash";

const obj = {
    one: {
        two: {
            three: "stuff"
        }
    }
}
const About = () => {
    const result = _.get(obj, "one.two.three")
    console.log(result);
    return (
        <div>
            <h1>Oh Hai, about that</h1>
        </div>
    );
};

export default About