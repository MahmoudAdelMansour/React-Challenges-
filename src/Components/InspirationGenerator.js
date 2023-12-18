import * as React from "react";

import FancyText from "./FancyText";
import inspirations from "./inspirations";
import Color from "./Color";

export default function InspirationGenerator({children})
{
    const [index,setIndex] = React.useState(0);
    const inspiration = inspirations[index];
    const next = () => setIndex((index +1)  % inspirations.length);

    return (
        <section>
            <p>Your Inspirational {inspiration.type} is:</p>
            {inspiration.type === 'quote'
                ? <FancyText text={inspiration.value} />
                : <Color value={inspiration.value} />
            }
            <button onClick={next}> Inspire Me Again</button>
            {children}
        </section>

    )
}