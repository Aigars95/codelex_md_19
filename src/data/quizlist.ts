const quizList = [
    [{
    question: "Which input type defines a slider control?",
    answers: [
        {text: "range", correct: true},
        {text: "controls", correct: false},
        {text: "slider", correct: false},
        {text: "search", correct: false}]
},
{
    question: "Which HTML element defines navigation links?",
    answers: [
        {text: "<navigation>", correct: false},
        {text: "<nav>", correct: true},
        {text: "<navigate>", correct: false},
        {text: "<Navigator>", correct: false}]
},
{
    question: "Which of following is not an inline element?",
    answers: [
        {text: "<a>", correct: false},
        {text: "<button>", correct: false},
        {text: "<span>", correct: false},
        {text: "<section>", correct: true}]
},
{
    question: "What is the correct HTML for making a checkbox?",
    answers: [
        {text: '<input type="checkbox">', correct: true},
        {text: '<<input type="check">">', correct: false},
        {text: '<checkbox>', correct: false},
        {text: '<check>', correct: false}]
},
{
    question: "What is the correct HTML for inserting an image?",
    answers: [
        {text: '<img src="image.png" alt="MyImage">', correct: true},
        {text: '<img href="image.png" alt="MyImage">', correct: false},
        {text: '<image src="image.png" alt="MyImage">', correct: false},
        {text: '<img url="image.png" alt="MyImage">', correct: false}]
},
{
    question: "Which of following is not a block element?",
    answers: [
        {text: '<footer>', correct: false},
        {text: '<form>', correct: false},
        {text: '<a>', correct: true},
        {text: '<div>', correct: false}]
},
{
    question: "Attribute of <a> specifies the URL of the page the link goes to",
    answers: [
        {text: 'src', correct: false},
        {text: 'href', correct: true},
        {text: 'url', correct: false},
        {text: 'alt', correct: false}]
},
 {
    question: "What is the correct HTML for making a text area?",
    answers: [
        {text: '<input type="textarea">', correct: false},
        {text: '<input type="textbox">', correct: false},
        {text: '<input type="text">', correct: false},
        {text: '<textarea>', correct: true}]
},
{
    question: "What is the correct HTML for making a drop-down list?",
    answers: [
        {text: '<list>', correct: false},
        {text: '<select>', correct: true},
        {text: '<input type="dropdown">', correct: false},
        {text: '<input type="list">', correct: false}]
},
{
    question: "What is the correct HTML for making a text input field?",
    answers: [
        {text: '<input type="text">  ', correct: true},
        {text: '<textfield>', correct: false},
        {text: '<input type="textfield">', correct: false},
        {text: '<textinput type="text">', correct: false}]
}
],
        // css
[{
    question: "How do you select an element with id 'demo'?",
    answers: [
        {text: "demo", correct: false},
        {text: "*demo", correct: false},
        {text: ".demo", correct: false},
        {text: "#demo", correct: true}]
},
{
    question: "What is the default value of justify-content in flexbox?",
    answers: [
        {text: "center", correct: false},
        {text: "flex-end", correct: false},
        {text: "flex-start", correct: true},
        {text: "space-between", correct: false}]
},
{
    question: "How do you display hyperlinks without an underline?",
    answers: [
        {text: "a {text-decoration:no-underline;}", correct: false},
        {text: "a {underline:none;}", correct: false},
        {text: "a {decoration:no-underline;}", correct: false},
        {text: "a {text-decoration:none;}", correct: true}]
},
{
    question: "How do you select elements with class name 'test'?",
    answers: [
        {text: '#test', correct: false},
        {text: '.test ', correct: true},
        {text: '*test', correct: false},
        {text: 'test', correct: false}]
},
{
    question: "How to rotate objects?",
    answers: [
        {text: 'object-rotation: 30deg;', correct: false},
        {text: 'transform: rotate(30deg);', correct: true},
        {text: 'rotate-object: 30deg;', correct: false},
        {text: 'transform: rotate-30deg-clockwise;', correct: false}]
},
{
    question: "How to modifier element with BEM?",
    answers: [
        {text: 'btn--orange', correct: true},
        {text: 'btn__orange', correct: false},
        {text: 'btn^orange', correct: false},
        {text: 'btn > orange', correct: false}]
},
{
    question: "How can you created rounded corners?",
    answers: [
        {text: 'border[round]: 30px;', correct: false},
        {text: 'corner-effect: round;', correct: false},
        {text: 'border-radius: 30px;', correct: true},
        {text: 'alpha-effect: round-corner;', correct: false}]
},
 {
    question: "How do you select all p elements inside a div element?",
    answers: [
        {text: 'div p', correct: true},
        {text: 'div + p', correct: false},
        {text: 'div.p', correct: false},
        {text: 'div - p', correct: false}]
},
{
    question: "How can I give space between the cells with display:grid?",
    answers: [
        {text: 'margin', correct: false},
        {text: 'grid-gap', correct: true},
        {text: 'padding', correct: false},
        {text: 'flex', correct: false}]
},
{
    question: "The ____________ property specifies the stack order of an element?",
    answers: [
        {text: 'd-index', correct: false},
        {text: 'x-index', correct: false},
        {text: 'z-index', correct: true},
        {text: 's-index', correct: false}]
}
],
        //typescript
[{
    question: "How do you select an element with id 'demo'?",
    answers: [
        {text: "demo", correct: false},
        {text: "*demo", correct: false},
        {text: ".demo", correct: false},
        {text: "#demo", correct: true}]
},
{
    question: "What is the default value of justify-content in flex?",
    answers: [
        {text: "center", correct: false},
        {text: "flex-end", correct: false},
        {text: "flex-start", correct: true},
        {text: "space-between", correct: false}]
},
{
    question: "css?",
    answers: [
        {text: "<a>", correct: false},
        {text: "<button>", correct: false},
        {text: "<span>", correct: false},
        {text: "<section>", correct: true}]
},
{
    question: "How do you select elements with class name 'test'?",
    answers: [
        {text: '#test', correct: false},
        {text: '.test ', correct: true},
        {text: '*test', correct: false},
        {text: 'test', correct: false}]
},
{
    question: "css?",
    answers: [
        {text: '<img src="image.png" alt="MyImage">', correct: true},
        {text: '<img href="image.png" alt="MyImage">', correct: false},
        {text: '<image src="image.png" alt="MyImage">', correct: false},
        {text: '<img url="image.png" alt="MyImage">', correct: false}]
},
{
    question: "css?",
    answers: [
        {text: '<footer>', correct: false},
        {text: '<form>', correct: false},
        {text: '<a>', correct: true},
        {text: '<div>', correct: false}]
},
{
    question: "css",
    answers: [
        {text: 'src', correct: false},
        {text: 'href', correct: true},
        {text: 'url', correct: false},
        {text: 'alt', correct: false}]
},
 {
    question: "How do you select all p elements inside a div element?",
    answers: [
        {text: 'div p', correct: true},
        {text: 'div + p', correct: false},
        {text: 'div.p', correct: false},
        {text: 'div - p', correct: false}]
},
{
    question: "css?",
    answers: [
        {text: '<list>', correct: false},
        {text: '<select>', correct: true},
        {text: '<input type="dropdown">', correct: false},
        {text: '<input type="list">', correct: false}]
},
{
    question: "css?",
    answers: [
        {text: '<input type="text">  ', correct: true},
        {text: '<textfield>', correct: false},
        {text: '<input type="textfield">', correct: false},
        {text: '<textinput type="text">', correct: false}]
}
]

];

export default quizList