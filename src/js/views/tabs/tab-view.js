export default class TabView{
    constructor(types){
         this.types = types;
    }
    render(){
        let tabList = document.querySelector('.tab-list')

        this.types.forEach(type => {
            let li = document.createElement('li');
            li.className = 'nav-item';

            let button = document.createElement('button');
            button.value = type;

            switch (type) {
                case 'clothing':
                    button.innerText = 'Kleding';
                    button.className = 'active btn-left';
                    this.switchTab(button.value);
                    break;

                case 'decoration':
                    button.innerText = 'Decoratie';
                    break;

                case 'beautification':
                    button.innerText = 'Tierelantijn';
                    button.className = 'btn-right';
                    break;

                default:
                    break;
            }

            button.addEventListener('click', () => {
                let tab = document.querySelector('button.active');
                tab.classList.remove('active');
                button.classList.add('active')

                this.switchTab(button.value);
            })

            li.append(button);
            tabList.append(li);
        });
    }
}