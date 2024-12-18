import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background:#f0f2f5;
    --red:#E52E40;
    --blue:#5429CC;
    --blue-light:#6933FF;
    --text-title:#363F5F;
    --text-body:#969Cb3;
    --shape:#ffffff;
    --green:#33CC95;
}

* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;

}
//font-size:16px (Desktop)
html{
    @media(max-width:1080px){
        font-size: 93.75%;
    }
    @media(max-width:720px){
        font-size: 87.5%
    }
    
}
body{
    background-color:var(--background);
    --webkit-font-smoothing:antialised;
}
body, input, textarea, button{
    font-family:'Poppins', sans-serif; 
    font-weight:400;
}
h1,h2,h3,h4,h5,h6,strong{
    font-weight:600;
}
buttom{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
