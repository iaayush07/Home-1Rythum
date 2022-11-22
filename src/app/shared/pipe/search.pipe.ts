import { Pipe, PipeTransform } from '@angular/core';
import { user } from 'src/app/home.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userData: user[], searchTxt: string): user[] {
    if (!userData || !searchTxt) {
      return userData;
    }
    return userData.filter((item: any) =>
      item.studioEventLocation?.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()) ||
      item.eventLocation?.toLocaleLowerCase().includes(searchTxt.toLocaleLowerCase()))
  }

}
