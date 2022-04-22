const posts = [{ name: "ahmad", text: "hi" }]


const render = function () {
    $(".post-box").remove()

    for (let post of posts) {
        let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
        $("#timeline").append(postBox)
    }
}
render()

$("botton").on("click", function () {
    let obj = {}
    if ($("#name").val()) {
        obj.name = $("#name").val()
        obj.text = $("#text").val()

        posts.push(obj)
    }
    render()
})
