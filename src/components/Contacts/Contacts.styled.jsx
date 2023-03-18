import styled from 'styled-components'

export const ContactTable = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;;;

`
export const HeadTable = styled.thead`
  background-color: #18b1ff;
  display: block;
`
export const TableTh = styled.th`
  color: #fff;
  font-weight: bold;
  padding: 7px 0;
  width: 200px;

`
export const TableTbody = styled.tbody`
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-height: 200px;
  display: block;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`
export const TableTr = styled.tr`
  background-color: #e6e6e6;
  display: table;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;


  :nth-child(odd) {
    background-color: #fff;
  }

  :hover {
    background-color: #e1ea76
  }

  td {
    text-align: center;
    padding: 4px 0;
    font-size: 14px;
    font-weight: 400;
    width: 200px;


  }
`
export const TableBtn = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #ffffff;
  cursor: pointer;
  s
  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: #d16565;
  }

  svg {
    vertical-align: middle;
    font-size: 20px;
    fill: #d16565;
    transition: fill 0.2s ease-in-out;


    :hover {
      fill: #ffffff;
    }
  }
`
