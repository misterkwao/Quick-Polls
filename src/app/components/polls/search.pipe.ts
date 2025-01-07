import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(polls: any[], searchValue: string): any {
    if (!polls || !searchValue) {
      return polls;
    }
    const filtered = polls.filter(poll =>
      poll.question.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filtered;
  }

}
