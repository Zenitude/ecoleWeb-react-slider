import styled from 'styled-components';
import colors from '../../utils/styles/colors';

export const CarouselContainer = styled.figure`
    width: 50%;
    min-width: 260px;
    height: 450px;
    border: 1px solid black;
    margin: 100px auto 0;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
`;

export const CarouselItem = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${({display}) => display === 'yes' ? '1' : '0'};
    transition: opacity 0.5s ease-in-out;
`;

export const SwitchItem = styled.button`
    width: 50px;
    height: 50px;
    padding: 2px;
    border-radius: 50%;
    z-index: 2;
    border: 1px solid ${colors.secondary};
    & svg {
        width: 100%;
        margin: auto;
        // background: ${colors.primary};
    }
    position: absolute;
    top: 50%;
    ${({switcher}) => switcher === 'previous' ? 'left: 15px;' : 'right: 15px;'}
    transform: translateY(-50%);    
`;

export const RadioContainer = styled.div`
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 2;
`;

export const Radio = styled.button`
    width: 25px;
    height: 25px;
    padding: 2px;
    background: ${colors.primary};
    border: 1px solid ${colors.secondary};
    border-radius: 50%;
`;

export const ValidRadio = styled.span`
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: auto;
    background: ${colors.secondary};
    border-radius: 50%;
`;