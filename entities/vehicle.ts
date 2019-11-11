import { User } from '../user/entity';
import Skill from './Skill';

export default interface Vehicle {
    id: number;
    name: string;
    shiftStart: string;
    shiftEnd: string;
    capacity: number;
    capacity2: number;
    capacity3: number;
    defaultDriver: User;
    locationStartAddress: string;
    locationStartLatitude: number;
    locationStartLongitude: number;
    locationEndAddress: number;
    locationEndLatitude: number;
    locationEndLongitude: number;
    skills: Skill[];
    created: string;
    modified: string;
    color: string;
}
