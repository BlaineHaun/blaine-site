import * as React from "react"
import { getRandomIntInclusive } from "../utils";
import { Link } from "gatsby";
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
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem
                beatae cum facilis. Modi incidunt officiis laboriosam optio vero libero
                earum eaque facere dolores, fugit illum tempora sapiente nam numquam
                blanditiis voluptates rerum maxime harum minus alias, veritatis rem
                nobis error nesciunt! Modi, doloremque ut!
            </p>
            <p>
                Assumenda asperiores vero explicabo dolor magnam autem nam praesentium
                architecto error. Non consequuntur totam, magni minima sequi ipsa
                exercitationem excepturi, saepe fugiat modi dolores, iure soluta
                voluptas praesentium libero ea eligendi pariatur hic voluptate rerum
                earum. Laborum nihil debitis, ut voluptatum perspiciatis soluta corrupti
                obcaecati!
            </p>
            <p>
                Mollitia nobis atque magnam, nesciunt nulla cupiditate, eum aperiam rem
                eos perspiciatis consequuntur repellendus deleniti id molestiae modi? Et
                temporibus delectus eius distinctio modi, labore atque perferendis esse
                laudantium voluptatem assumenda, voluptatum dolore? Perspiciatis neque
                eaque quae tempora saepe doloremque quod velit aut modi facilis?
            </p>
            <p>
                Eum delectus explicabo magni. Natus laboriosam dolores officia facere
                neque omnis, eligendi sunt! Qui maxime saepe ullam aliquid quae quis sit
                consequatur ex magnam ea. Laborum, accusantium. Libero, sequi nam
                possimus enim quis animi alias! Voluptate, quia! Aperiam expedita in
                quibusdam dignissimos a dolores cum!
            </p>
            <p>
                Molestias, iure labore incidunt sed culpa autem, necessitatibus tempora
                expedita officiis voluptatibus inventore ducimus quaerat sapiente ipsam
                obcaecati nihil illum nisi cum animi accusamus! Voluptates, tenetur.
                Dolorem assumenda expedita incidunt officiis eius magnam hic nisi. Nemo
                neque beatae adipisci debitis, assumenda autem expedita consequuntur
                maxime.
            </p>
            <p>
                Eius eaque expedita hic eum distinctio atque ut, dolores corrupti iste
                commodi rerum fugiat aliquid soluta maiores nemo necessitatibus vero
                porro reiciendis ea, mollitia similique. Quae, mollitia natus debitis
                qui doloribus architecto magni neque optio soluta inventore id, deleniti
                unde atque omnis quibusdam quas! Blanditiis?
            </p>
            <Link to="/about">Fastly go to about page</Link>
        </div>
    )
}