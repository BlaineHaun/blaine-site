import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

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
            <Link to="/">Fastly go to home page</Link>
        </div>
    );
};

export default About