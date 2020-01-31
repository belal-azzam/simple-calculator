import MathMaticalOp from "./MathOpeartion.interface";
import Addition from "./Addition.class";
import Multiplication from "./Multiplication.class";
import Subtraction from "./Subtraction.class";
import Division from "./Division.class";
const className = 'Multiplication.class';
import { map, filter } from 'rxjs/operators';


export default class MathOpFactory {
    private constructor(){};
    static getOperation(op: string) : Promise<MathMaticalOp> {
        
        let mapping = {
            add: "./Addition.class",
            sub: "./Subtraction.class",
            mul :"./Multiplication.class",
            div : "./Division.class"
        }
        return import(/* webpackChunkName: "my-chunk-name" *//* webpackMode: "lazy" */`${mapping[op]}`).then( (mod) => {
            return new mod.default();
        });
         
    }
}