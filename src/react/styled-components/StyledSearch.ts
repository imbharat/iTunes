import styled from "styled-components";

export const StyledSearch = styled.div`
    background: #050c13e3;
    display: flex;
    justify-content: center;
    
    > .MuiFormControl-root {
        margin: 0.5rem;
        min-width: 40%;

        > .MuiInputBase-root {
            background: white;
            border-radius: 2rem;
            
            > input {
                font-weight: 600;
                font-style: italic;
                font-size: 1.2rem;
                padding: 0.5rem 1.5rem;
            }
        }
    }
    > .MuiButtonBase-root {
        margin: 0.5rem;
        background: #e4b634cc;
        line-height: 2rem;
    }
`;