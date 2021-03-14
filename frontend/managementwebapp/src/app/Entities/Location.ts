import { Graduate } from './Graduate';
import { Institute } from './Institute';

export class Location {
    id?: Number;
    city!: String;
    state!: String;
    institutes!: Institute[];
    graduates!: Graduate[];
}