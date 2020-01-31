import MathOpFactory from "./calculator/MathOperation.factory";
let $first =$('#first');
let $second =$('#second');
let $result = $('#result');

// import(/*webpackChunkName: "ccc"*/className).then((mod) => {
//     console.log(mod);
// })
const allowedOps = [
    'add',
    'sub',
    'mul',
    'div'
];


$('.opeartion').on('click', function()
{
    let firstVal = parseInt($first.val());
    let secondVal = parseInt($second.val());
    if(firstVal == '' || secondVal == '')
    {
        alert('please fill both numbers');
        return ;
    }
    const op = $(this).val();
    if(allowedOps.indexOf(op) == -1)
    {
        alert('please select a valid operation');
        return ;
    }
    MathOpFactory.getOperation(op).then(opeartionClass => {
        $result.text(opeartionClass.apply(firstVal, secondVal))
    });
});