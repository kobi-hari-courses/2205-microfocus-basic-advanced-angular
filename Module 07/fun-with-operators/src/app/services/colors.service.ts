import { Injectable } from '@angular/core';
import { ALLCOLORS } from '../models/all-colors';
import { Color } from '../models/color.model';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  private allColors: Color[];

  constructor() {
    this.allColors = Object.keys(ALLCOLORS).map((key) => ({
      code: key,
      name: ALLCOLORS[key],
    }));
  }

  private delay(millis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), millis));
  }

  async search(keyword: string): Promise<Color[]> {
    if (!keyword) return [];

    keyword = keyword.toLowerCase();
    console.log(`Starting search for ${keyword}`);

    await this.delay(4000);
    let res = this.allColors.filter((clr) =>
      clr.name.toLowerCase().includes(keyword)
    );

    console.log(`Completed search for ${keyword}`);
    return res;
  }
}
