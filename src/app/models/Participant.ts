import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Participant {
    constructor(
        public init: string,
        public name: string,
        public time = 0
    ) { }
}

@Injectable({
    providedIn: 'root',
})
export class ParticipantAdapter implements Adapter<Participant> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adapt(item: any): Participant {
        return new Participant(item.init, item.name, item.time);
    }
}
