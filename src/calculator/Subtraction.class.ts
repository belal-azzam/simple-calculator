import MathMaticalOp from "./MathOpeartion.interface";

export default class Subtraction implements MathMaticalOp {
    apply(x :number, y: number) : number {
        return x - y;
    }
}
