/***
 * The observer pattern is a software design pattern in which an object,
 * named the subject, maintains a list of its dependents, called observers,
 * and notifies them automatically of any state changes,
 * usually by calling one of their methods.
 ***/
class Blog {
    constructor() {
        this.article = '';
        this.viewers = [];
    }

    setArticle(article) {
        this.article = article;
        this.notifyViewers();
    }

    notifyViewers() {
        this.viewers.forEach((viewer) => viewer.inform(this.article));
    }

    subscribe(observer) {
        this.viewers.push(observer);
    }

    unsubscribe(observer) {
        this.viewers = this.viewers.filter((viewer) => viewer.email !== observer.email);
    }
}

class User {
    constructor(name, email) {
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
