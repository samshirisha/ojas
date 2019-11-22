import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'san'
})
export class SanPipe implements PipeTransform {

  transform(result,term) {
    if(term==undefined){
      return result
    }else{
      return result.filter(
        function(x){
          return x.title.toUpperCase().startsWith(term.toUpperCase())
        }
      )
    }
  }

}
