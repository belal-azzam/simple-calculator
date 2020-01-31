import MathMaticalOp from "./MathOpeartion.interface";

export default class Division implements MathMaticalOp {
    apply(x :number, y: number) : number {
        return x / y;
    }

}