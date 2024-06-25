var comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
];
// buat fungsi untuk menghitung total komentar beserta balasannya
var totalAllComments = function (comments) {
    return comments.reduce(function (totalAllComment, comment) {
        totalAllComment += 1;
        if (comment.replies) {
            totalAllComment += totalAllComments(comment.replies);
        }
        return totalAllComment;
    }, 0);
};
var totalAllComment = totalAllComments(comments);
console.log(totalAllComment);
