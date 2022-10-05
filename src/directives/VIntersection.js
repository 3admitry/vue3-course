export default {
    // el - элемент на который вешаем дериктиву
    // объект в значении Value которого получаем переданное значение/объект/функцию которая будем использывать
    mounted(el, binding) {
        console.log(binding)
        let options = {
            rootMargin: '0px',
            threshold: 1.0
        }

        let callback = (entries, observer) => {
            // вырезал из if - && binding.value.page < binding.value.totalCountPage
            // вробеды в документации это про динамические директивы почитать нужно как реализовывается
            if (entries[0].isIntersecting) {
                binding.value();
            }
        };

        let observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection',
}


/*
let options = {
    rootMargin: '0px',
    threshold: 1.0
}

let callback = (entries, observer) => {
    if (entries[0].isIntersecting && this.page < this.totalCountPage) {
        this.loadMorePosts();
    }
};

let observer = new IntersectionObserver(callback, options);
observer.observe(this.$refs.observer);*/
