const USERS = [
    {
        id: 0,
        name: 'Thomas',
        age: 25,
    },
    {
        id: 1,
        name: 'Jacob',
        age: 50
    },
    {
        id: 0,
        name: 'Michael',
        age: 47,
    },
]

const sortByKey = (data, key) => {
    return data.sort((a, b) => a.age - b.age)
}

class Telegram {
    getUsers() {
        return USERS;
    }

    createAgeIterator() {
        return new TelegramIterator(this, 'age');
    }
}

class TelegramIterator {
    constructor(telegram, type) {
        this.telegram = telegram;
        this.type = type;
        this.currentPosition = 0;
        this.cache = null;
    }

    lazyInit() {
        if (this.cache === null) {
            const users = telegram.getUsers()
            this.cache = sortByKey(users, this.type);
        }
    }

    getNext() {
        if (this.hasMore()) {
            const item = this.cache[this.currentPosition];
            this.currentPosition++
            return item;
        }
    }

    hasMore() {
        this.lazyInit()
        return this.currentPosition < this.cache.length
    }
}

const telegram = new Telegram();
const ageIterator = telegram.createAgeIterator();

console.log(ageIterator.getNext());
console.log(ageIterator.getNext());
console.log(ageIterator.getNext());

console.log(ageIterator.getNext());
