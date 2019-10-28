
export class Shoe {
    public name: string;
    public description: string;
    public price: string;
    public imagePath: string;

    constructor(name:string, desc:string, price:string, imagePath:string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.price = price;
    }
}