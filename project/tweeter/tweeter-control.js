const post = function () {
    if ($("#input").val()) {
        let name = $("#input").val()
        tweeter.addPost(name)
        renderer(tweeter.getPosts())
        $("#input").val('')
    }
}

$("#posts").on("click",".delete" ,function () {
    let name = $(this).data().id
    tweeter.removePost(name)
    renderer(tweeter.getPosts())
})

$("#posts").on("click",".input" ,function () {
    if ($(this).closest(".input1").find("input").val()) {
    let text = $(this).closest(".input1").find("input").val()
    let name = $(this).closest(".post").attr("id")
    tweeter.addComment(text,name)
    renderer(tweeter.getPosts())
    $(this).closest(".input1").find("input").val('')
    }

})

$("#posts").on("click",".delete-comment" ,function () {
    let commentId = $(this).closest(".comments").data().id
    let postId = $(this).closest(".post").attr("id")
    tweeter.removeComment(postId,commentId)
    renderer(tweeter.getPosts())
    

})