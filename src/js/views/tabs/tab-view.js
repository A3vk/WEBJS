export default class TabView{
    render(types){
        this.tabList = document.querySelector('.tab-list')

        for (let i in types){

            this.li = document.createElement('li');
            this.li.className = 'nav-item';

            this.button = document.createElement('button');
            this.button.id = types[i];

            switch (types[i]) {
                case 'clothing':
                    this.text = document.createTextNode('Kleding');
                    break;

                case 'decoration':
                    this.text = document.createTextNode('Decoratie');
                    break;

                case 'beautification':
                    this.text = document.createTextNode('Tierelantijn');
                    break;

                default:
                    break;
            }

            this.button.appendChild(this.text);
            this.li.append(this.button);
            this.tabList.append(this.li);

            this.max = i;
        }

        this.tabs = document.querySelectorAll('.tab-list > li > button')

        this.tabs[0].className = 'btn-left';
        this.tabs[this.max].className = 'btn-right';
        
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].addEventListener('click', () => {
                this.tab = document.querySelector('button.active');
                this.tab.classList.remove('active')
                this.tabs[i].classList.add('active');

                this.switchTab(this.tabs[i].id);
            });
        }
    }
}