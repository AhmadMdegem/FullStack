const Renderer = function () {

    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            let div = `<div class=post id=${post.id}></div>`
            $("#posts").append(div)
            let divCopy = `<div data-id=${post.id} > <h1 class=post-text> ${post.text} </h1> </div>`
            $("#" + post.id).append(divCopy)
            generateComment(post)
        }
    }
    const generateComment = function (post) {
        for (comment of post.comments) {
            let divCopy = `<div class="comments" data-id=${comment.id}> <span class="delete-comment">X</span><span >${comment.text}<span> </div>`
            $("#" + post.id).append(divCopy)
        }
        let inputt = `<div class =input1><input  type="text" placeholder="Got something to say?" ><span class =input>   Comment</span></div>`
        $("#" + post.id).append(inputt)
        let divCopy1 = `<div class=delete data-id=${post.id}>Delete Post</div>`
        $("#" + post.id).append(divCopy1)
    }
    return renderPosts

}


const renderer = Renderer()
renderer(tweeter.getPosts())