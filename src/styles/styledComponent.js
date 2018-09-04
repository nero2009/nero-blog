import React from "react";
import styled, { keyframes, injectGlobal } from "styled-components";

import Link from "gatsby-link";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Poor+Story|Rajdhani:500');
    body{
        font-family: 'Rajdhani', sans-serif;
    }

    
`

const anchorUnderline = keyframes`
    0%,10%{
        left: 0;
        right: 100%;
    }
    40%,60%{
        left: 0;
        right: 0;
    }
    
    
    90%,100%{
        left: 100%;
        right: 0;
    }
`

const shake =keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`

export const StyledLink = styled(Link)`
    float: right;
    color: #2F56B0;
    position: relative;
    text-decoration: none;
    transition: color .4s ease-out;
    margin-left: 2em;
    font-size: 20px;
    font-family: 'Rajdhani', sans-serif;
    &:after{
        border-radius: 1em;
        border-top: .1em solid #2F56B0;
        content: "";
        position: absolute; 
        right: 100%;
        bottom: .14em;
        left:0;
        transition: right .4s cubic-bezier(0,.5,0,1),
            border-color .4s ease-out;
    }
    &:hover{
        color: #457DFB;
	    text-decoration: none;
    }
    &:hover:after{
        border-color: #457DFB;
        animation: ${anchorUnderline} 2s cubic-bezier(0,.5,0,1) infinite ;
    }


`
export const HomeLink = styled.h3`
    margin-bottom:20px;
    display:inline-block;
    fontStyle:normal;
    font-family: 'Rajdhani', sans-serif;
    color:#5384ac;
    &:hover{
        animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
        color: #768983;
    }
`

export const CustomContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding-bottom: 0px;
    padding-top: 20px;
    margin-bottom: -20px;
`

export const Line =styled.div`
    margin-bottom:20px;
    margin-top:5px;
    max-width:800px;
    border-bottom:1px solid grey;
    position:relative;
`
export const AboutContainer= styled.div`
    display: flex;
`

export const AboutTextSection = styled.div`
    flex: 2;
`

export const AboutImageSection = styled.div`
    flex: 1;
`
export const H1 = styled.h1`
    font-family: 'Rajdhani', sans-serif;

`

export const H2 = styled.h2`
    font-family: 'Rajdhani', sans-serif;

`

export const H4 = styled.h4`
    font-family: 'Rajdhani', sans-serif;
`
export const H5 = styled.h5`
    font-family: 'Rajdhani', sans-serif;
`

export const H6 = styled.h6`
    font-family: 'Rajdhani', sans-serif;
`
export const H3 = styled.h3`
    font-family: 'Rajdhani', sans-serif;
    color:hsla(0, 0%, 0%, .8);
    
`

export const BlogLink =styled(Link)`
    text-decoration:none;
    font-family: 'Rajdhani', sans-serif;
`
export const FooterDiv =styled.div`
    
    padding-top:10px;
`

export const Date = styled.h6`
    font-family: 'Poor Story', cursive;
    margin-top: -25px;
    color:hsla(0, 0%, 0%, .8);
    font-weight: normal;
`

export const Excerpt = styled.p`
    color:hsla(0, 0%, 0%, .8);
`

export const BlogHeader = styled.h3`
    font-family: 'Rajdhani', sans-serif;
    color:hsla(0, 0%, 0%, .8);
    &:hover{
        color:#2F56B0;
    }
`
