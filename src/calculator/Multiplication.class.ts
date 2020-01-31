import MathMaticalOp from "./MathOpeartion.interface";

export default class Multiplication implements MathMaticalOp {
    apply(x :number, y: number) : number {
        return x * y;
    }

}