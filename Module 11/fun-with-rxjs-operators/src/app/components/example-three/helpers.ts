import { Direction } from "./models/direction.model";
import { Position } from "./models/position.model";
import { Step } from "./models/step.model";

export function newPosition(position: Position, step: Step, direction: Direction): Position {

    console.log(position);

    const multiplier = (direction === 'Down' || direction === 'Right') ? 1 : -1;
    const size = step.size * multiplier;

    const deltaX = (direction === 'Left' || direction === 'Right') ? size : 0;
    const deltaY = (direction === 'Left' || direction === 'Right') ? 0 : size;

    console.log(multiplier, size);
    console.log(deltaX, deltaY);

    const res = {
        x: position.x + deltaX, 
        y: position.y + deltaY
    }

    console.log(res);
    return res;
}