import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private useGlobalMaxTime: boolean = true;
  private globalMaxTime: number = 60 * 15;

  constructor() { }
  getGlobalMaxTime(): number {
    return this.globalMaxTime;
  }

  setGlobalMaxTime(newTime: number) {
    this.globalMaxTime = newTime;
  }

  getUseGlobalMaxTime(): boolean {
    return this.useGlobalMaxTime;
  }

  setUseGlobelMaxTime(useGMTime: boolean) {
    this.useGlobalMaxTime = useGMTime;
  }

}
