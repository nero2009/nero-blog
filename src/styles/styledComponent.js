import React from "react";
import styled from "styled-components";
import * as glamor from "glamor";
import glamorous from "glamorous";
import Link from "gatsby-link";

const animationStyles = props =>{
    const underline = glamor.css.keyframes({
        '0%,10%':{left:`0`, right:`100%`},
        '40%,60%':{left:`0`, right:`0`},
        '90%,100%':{left:`100%`, right:`0`}
    })
    return {animation: `${underline} 2s cubic-bezier(0,.5,0,1) infinite`}
}

export const AnimatedLink =
    glamorous.Link(animationStyles)