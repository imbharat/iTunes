import styled from "styled-components";

export const StyledSong = styled.div`
    flex-grow: 1;
    width: 50%;
    > .MuiPaper-root {
        display: flex;
        height: 10rem;
        box-shadow: 0.2rem 0.2rem 0.2rem #9f9f9f;
        margin: 1.5rem 2rem;
        &:hover {
            box-shadow: 0.5rem 0.5rem 0.5rem #9f9f9f
        }
        > img {
            min-width: 30%;
            width: 30%;
        }
        > .MuiCardContent-root {
            width: 65%;
            background: #050c13e3;
            color: white;
            > .trackN, .collectionN, .artistN {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            > .trackN {
                font-size: 1.2rem;
                font-weight: 600;
                font-style: italic;
            }
            > .collectionN, .artistN {
                font-size: 1rem
            }
        }
    }
`;