export default class GridView{
    constructor(){
        this.gridContainers = document.querySelectorAll('.grid-container');

        for (let i = 0; i < this.gridContainers.length; i++){
          for (let j = 0; j < 15; j++) {
            this.row = this.createElement('div', 'row');
           for (let k = 0; k < 15; k++){
             this.square = this.createElement('div', 'grid-square');
               this.row.append(this.square);
           }
         this.gridContainers[i].append(this.row);
         }
        }
    }


    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className)
    
        return element;
      }
}


