const dataService = require('@services/dataService');

class presenter {
    constructor(comment) {
        this.comment = comment;
    };

    jalali_created_at() {
        return dataService.toPersianTime(this.comment.created_at);
    };

    excerpt(word_limit = 20) {
        const words = this.comment.content.split(' ');
        return words.slice(0, word_limit - 1).join(' ') + " ...";
    }

}

module.exports = presenter;