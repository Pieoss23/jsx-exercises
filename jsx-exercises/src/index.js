import ReactDOM  from 'react-dom';


const root = ReactDOM.createRoot(document.querySelector('#root'));
function somma(x,y) {
    return <h2>La somma è: {x + y} </h2>
}
root.render(
    somma(10, 8)
);



