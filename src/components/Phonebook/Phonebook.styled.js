
import styled from 'styled-components';

export const Form = styled.form`  
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`  
    margin-bottom: ${p => p.theme.space[4]}px;
    display: flex;
    flex-direction: column;
    /* width: ${p => p.theme.space[8]}px;
    height: ${p => p.theme.space[8]}px; */
`;
export const Input = styled.input`  
    width: ${p => p.theme.space[8]}px;
    padding: ${p => p.theme.space[3]}px;
`;
export const Button = styled.button`  
    display: flex;
    justify-content: center;
    width: ${p => p.theme.space[7]}px;
    padding: ${p => p.theme.space[3]}px;
    border: none;
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.accent};
    border-radius: 8px;
    
`;