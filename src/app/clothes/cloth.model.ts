import { Specifications } from '../shared/specifications/specifications.model';

export class Cloth {
    public name: string;
    public description: string;
    public imagePath: string;
    public price: string;
    public specifications: Specifications;
    
    constructor(name:string, desc:string, image:string, price: string, specifications: Specifications) {
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.price = price;
        this.specifications = specifications;
    }
}