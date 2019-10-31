import { Specifications } from '../shared/specifications/specifications.model';

export class Shoe {
    public name: string;
    public description: string;
    public price: string;
    public imagePath: string;
    public specifications: Specifications;

    constructor(name:string, desc:string, price:string, imagePath:string, specifications: Specifications) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.price = price;
        this.specifications = specifications;
    }
}