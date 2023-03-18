import styled from 'styled-components'

export const FormStyle = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 20px;

`
export const LabelForm = styled.label`
  margin:10px 0 2px 5px;
  font-weight: bold;
  color: #666666;

`
export const Input = styled.input`
  width: 60%;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #ffffff;
  box-shadow: 0 20px 10px -20px rgba(0, 0, 0, 0.45) inset;
  padding: 2px 10px;


`

export const Button = styled.button`
  margin-top: 30px;
  position: absolute;
  bottom: 25%;
  right: 40px;
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  color: #fff;
  background-color: #18b1ff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.20);
  transition: color 0.2s ease, background-color 0.2s ease;

  :hover {
    color: #18b1ff;
    background-color: #fff;
  }
`
