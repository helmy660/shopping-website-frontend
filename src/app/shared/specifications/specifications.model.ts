
export class Specifications {
    public size: string[];
    public color: string[];
    public gender: string;

    constructor(size: string[],color: string[], gender: string) {
        this.size = size;
        this.color = color;
        this.gender = gender;
    }

}