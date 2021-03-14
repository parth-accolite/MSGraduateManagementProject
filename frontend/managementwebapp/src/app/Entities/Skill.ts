import { Graduate } from './Graduate';

export class Skill {
    id!: Number;
    name!: String;
    category!: String;
    graduates!: Graduate[];
    constructor(id: number) {
        this.id = id;
    }
}