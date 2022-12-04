import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '23b0959296e8471abc8afbccdf74b223', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
