type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}

const comments: IComment[] = [
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
]

// buat fungsi untuk menghitung total komentar beserta balasannya
const totalAllComments = (comments: IComment[]) => {
    return comments.reduce(
        (totalAllComment, comment: IComment): number => {
            totalAllComment += 1

            if (comment.replies) {
                totalAllComment += totalAllComments(comment.replies)
            }

            return totalAllComment
        },
        0
    )
}

const totalAllComment = totalAllComments(comments)

console.log(totalAllComment)
