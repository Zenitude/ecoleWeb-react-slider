import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direciton: column;

    & main {
        flex-grow: 1;
    }
`;