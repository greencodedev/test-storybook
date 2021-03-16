import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   
  }

  html {
    font-family: "Amazon Ember", Arial,sans-serif;
    font-size:15px;

    scrollbar-width: thin;
}


 a{
    text-decoration: none;
 }
 a:hover{
     color:#f3d078;
 }
body::-webkit-scrollbar,
.gallery::-webkit-scrollbar {
    width: 0.3rem;
    height: auto;
    background-color: #232F3E;
}

body::-webkit-scrollbar-track,
.gallery::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #232F3E;
    border-radius: 0.6rem;
}

body::-webkit-scrollbar-thumb,
.gallery::-webkit-scrollbar-thumb {
    border-radius: 0.6rem;
    background-color:#232F3E;
}


footer {
    text-align: center;
}

/* 
** React DatePicker
*/
.react-datepicker {
    font-family: "Amazon Ember", Arial,sans-serif;
}
.react-datepicker__day--selected,
.react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color:#f0c14b !important;
    outline: none;
}
.react-datepicker__day--selected:hover,
.react-datepicker__day:hover {
    outline: none;
}

`
export default GlobalStyles
