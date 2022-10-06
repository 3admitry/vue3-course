import {createApp} from 'vue'
import App from './App'
import components from '@/components/UI' // массив наших UI-компонент
import router from "@/router/router";
import directives from '@/directives' // массив дерикитива для бесконечной загрузки - Observer intersection
import store from "@/store";

//Создание экземпляра корневой (входной) компоненты
const app = createApp(App);

// Цикл для динамического подключения/регистрации UI-компонент
components.forEach(component => {
    app.component(component.name, component)
})

// Цикл для регистрации директив
directives.forEach(directive => {
    app.directive(directive.name, directive)
})


app
    .use(router)
    .use(store)
    .mount('#app')
