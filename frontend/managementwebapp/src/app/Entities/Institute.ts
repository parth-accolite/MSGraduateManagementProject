import { Graduate } from './Graduate';

export class Institute {
    id?: Number;
    name!: String;
    locationId!: Number;
    graduates!: Graduate[];
    shortHand!: String;
}