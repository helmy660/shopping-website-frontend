
export class Cloth {
    public name: string;
    public description: string;
    public imagePath: string;
    public price: string;
    
    constructor(name:string, desc:string, image:string, price: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.price = price;
    }
}