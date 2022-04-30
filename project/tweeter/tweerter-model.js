const Tweeter = function () {

    let _posts = mockPosts.slice()
    let postIdCounter = 2
    let commentIdCounter = 6

    const getPosts = function () {
        return _posts
    }
    const addPost = function (text) {
        let opj = {}
        postIdCounter += 1
        opj.text = text
        opj.id = "p" + postIdCounter
        opj.comments = []
        _posts.push(opj)


    }
    const removePost = function (postId) {
        let index = 0
        for (post2 of _posts) {
            if (post2.id == postId)
                _posts.splice(index, 1)
            index += 1
        }

    }
    const addComment = function (text, postId) {
        for (post3 of _posts) {
            if (post3.id == postId) {

                let obj = {}
                commentIdCounter += 1
                obj.id = "c" + commentIdCounter
                obj.text = text
                post3.comments.push(obj)
            }
        }
    }
    const removeComment = function (postId, commentId) {
        for (post1 of _posts) {
            if (post1.id == postId) {
                let index = 0
                for (comment of post1.comments) {
                    if (comment.id == commentId) {
                        post1.comments.splice(index, 1)
                    }
                    index += 1
                }
            }
        }
    }





    return {
        removePost: removePost,
        addPost: addPost,
        getPosts: getPosts,
        addComment: addComment,
        removeComment: removeComment
    }

}


const tweeter = Tweeter()
