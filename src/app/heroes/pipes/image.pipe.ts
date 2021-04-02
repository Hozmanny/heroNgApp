import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    let path: string = ``;
    if (heroe.alt_img = ``) {
      path = `assets/no-image.png`;
    } else {
      path = `assets/heroes/${heroe.id}.jpg`;
    }
    return path;
  }

}
