/***
 * The observer pattern is a software design pattern in which an object,
 * named the subject, maintains a list of its dependents, called observers,
 * and notifies them automatically of any state changes,
 * usually by calling one of their methods.
 ***/
class Blog {
    constructor() {
        this.article = '';
        this.subscribers = [];
    }

    setArticle(article) {
        this.article = article;
        this.notifySubscribers();
    }

    notifySubscribers() {
        this.subscribers.forEach((subscriber) => subscriber.inform(this.article));
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter((subscriber) => subscriber.email !== observer.email);
    }
}

class Subscriber {
    inform(article) {}
}

class User extends Subscriber {
    constructor(name, email) {
        super()
        this.name = name;
        this.email = email;
    }

    inform(article) {
        console.log(`Hi ${this.name}! We have a new article "${article}"`)
    }
}

const blog = new Blog();
const sam = new User('Sam', 'sam@test.com');

blog.setArticle('jQuery');

blog.subscribe(sam);

blog.setArticle('React');
blog.setArticle('Angular');

blog.unsubscribe(sam);

blog.setArticle('Vue.js');
