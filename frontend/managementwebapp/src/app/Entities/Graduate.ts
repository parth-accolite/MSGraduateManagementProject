import { Feedback } from './Feedback';
import { Skill } from './Skill';

export class Graduate {
    id?: Number;
    name!: String;
    age !: Number;
    gender !: String;
    address !: String;
    phoneNumber !: String;
    emailId !: String;
    joiningDate !: String;
    rollNumber !: String;
    biography !: String;

    instituteId!: Number;
    locationId!: Number;
    skills?: Skill[];

    photoUrl: String = "https://picsum.photos/200/300";

    feedbacks?: Feedback[];
    isDeleted?: Boolean;
}