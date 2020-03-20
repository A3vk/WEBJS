export default class TabView{
    constructor(){
        this.tabList = document.querySelector('.tab-list')

        this.li = document.createElement('li');
        this.li.className = 'nav-item';
        this.button = document.createElement('button');
        this.text = document.createTextNode('Kleding');
        this.button.appendChild(this.text);
        this.button.className = 'btn-left';
        this.li.append(this.button);

        this.tabList.append(this.li);
    }
}