import styled, { keyframes, injectGlobal } from "styled-components";

import {Link} from 'gatsby';

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
export const HomeLink = styled(Link)`
    padding:20px 0px;
    display:inline-block;
    fontStyle:24px;
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

export const ProjectList = styled.li`
    position: relative;
    padding-left: 2rem;
    line-height: 1.5;
    margin-bottom:1rem;
    &:before{
        color:#5384ac;
        width:20px;
        height:20px;
        top:0;
        left:0;
        position:absolute;
        content: '\f058';
        font-family: "FontAwesome";
    }
`

export const CustomContainer = styled.div`
    margin: 0 auto;
    max-width: 900px;
    padding-bottom: 0px;
    padding-left:20px;
    padding-right:20px;
    margin-bottom: -20px;
    
`

export const BodyContainer = styled.div`
    margin: 0 auto;
    max-width: auto;
    padding-bottom: 0px;
    
    margin-bottom: -20px;
    border-top: 6px solid #5384ac;
`

export const Line =styled.div`
    margin-bottom:20px;
    margin-top:5px;
    max-width:800px;
    border-bottom:1px solid grey;
    position:relative;
`
export const AboutContainer= styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
    

  @media (max-width: 700px) {
    grid-template-columns: 
  }
`

export const AboutTextSection = styled.div`
    
`

export const AboutImageSection = styled.div`
    
`
export const H1 = styled.h1`
    font-family: 'Rajdhani', sans-serif;

`

export const H2 = styled.h2`
    color:#5384ac;
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
export const BlogPostContainer = styled.div`
    padding: 10px;
    
`

export const BlogLink =styled(Link)`
    text-decoration:none;
    font-family: 'Rajdhani', sans-serif;
    
`
export const Article = styled.article`
    border-bottom: 1px solid #e6e5e6;
    padding: 5px;
`
export const FooterDiv =styled.div`
    
    padding-top:10px;
`

export const Date = styled.h6`
    font-family: 'Poor Story', cursive;
    color:hsla(0, 0%, 0%, .8);
    font-weight: normal;
    margin-bottom: 1rem;
`
export const Author = styled.h6`
    margin-bottom: 1rem;
    color: hsla(0, 0%, 0%, .8)
`

export const PostToolbar =styled.div`
  display: grid;
  grid-template-columns: 200px 150px ;
  grid-gap:10px;
  margin-top: 5px;
`

export const Excerpt = styled.p`
    color:hsla(0, 0%, 0%, .8);
`

export const BlogHeader = styled.h3`
    font-family: 'Rajdhani', sans-serif;
    color:hsla(0, 0%, 0%, .8);
    margin-bottom: .5rem;
    &:hover{
        color:#2F56B0;
    }
`
export const BookmarkLink = styled.a`
    text-decoration: underline;
    text-underline-position: under;
    color: #222;
    font-family: 'Rajdhani', sans-serif;

    &:hover{
        text-decoration: none;
    }
`

export const BookmarkHeader = styled.div`
    text-align: center;
    font-family: 'Rajdhani', sans-serif;
`

export const BookmarkTitle = styled.h1`
    padding:0px;
    margin-bottom:10px;
    font-family: 'Rajdhani', sans-serif;
`

export const BookmarkSubHeader = styled.h4`
    color:grey;
    font-family: 'Rajdhani', sans-serif;
`

export const SourceLink = styled.a`
    text-decoration: none;
    color: grey;
    font-style: italic;
    font-weight: bold;
    &:hover{
        color: #595959;
    }
`

export const BlueLine = styled.div`
    max-width:800px;
    border-bottom:1px solid #2F56B0;
    
`

