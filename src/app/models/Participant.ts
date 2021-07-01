import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Participant {
    constructor(
        public init: string,
        public name: string,
        public time: number = 0
    ) { }
}

@Injectable({
    providedIn: 'root',
})
export class ParticipantAdapter implements Adapter<Participant> {
    adapt(item: any): Participant {
        return new Participant(item.init, item.name, item.time);
    }
}
