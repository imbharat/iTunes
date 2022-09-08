import styled from "styled-components";

export const StyledFooter = styled.footer`
    text-align: center;
    background: #050c13e3;
    min-height: 2.5rem;
    /* position: absolute; */
    bottom: 0;
    width: 100%;
    > div {
        font-size: 1.2rem;
        line-height: 2rem;
        > a {
            text-decoration: none;
            color: white;
        }
        > a:hover {
            cursor: pointer;
        }
    }
`;