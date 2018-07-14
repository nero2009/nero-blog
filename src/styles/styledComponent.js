import React from "react";
import styled, { keyframes } from "styled-components";
import * as glamor from "glamor";
import glamorous from "glamorous";
import Link from "gatsby-link";

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
    &:hover{
        animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding-bottom: 0px;
    padding-top: 20px;
    margin-bottom: -20px;
`

export const Line =styled.div`
    margin-bottom:20px;
    margin-top:5px;
    width:800px;
    border-bottom:1px solid grey;
    position:relative;
`



