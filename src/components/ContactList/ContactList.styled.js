import styled from 'styled-components';

export const Li = styled.li`  
    width: 100%;
    /* padding: ${p => p.theme.space[3]}px;
    margin-left: ${p => p.theme.space[3]}px; */
    display: flex;
    justify-content: space-between;
`;

export const Ul = styled.ul`  
    width: ${p => p.theme.space[8]*2}px;
    /* padding: ${p => p.theme.space[3]}px;  */
    /* margin: 0; */
`;