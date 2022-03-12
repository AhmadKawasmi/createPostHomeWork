const contentPs = document.getElementsByClassName('postContent')[0]
const input = document.getElementById('postInput')
const btn = document.getElementById('postBtn')

const createNewPost = function(){
    const postDiv = document.createElement('div')
    const userInfo = document.createElement('div')
    const btnsDiv = document.createElement('div')
    const text = input.value
    const img = document.createElement('img')
    const userName = document.createElement('h2')
    const postContent = document.createElement('h3')
    const like = document.createElement('button')
    const comment = document.createElement('button')
    const share = document.createElement('button')
    const commentInput = document.createElement('input')
    const commentSubmit = document.createElement('button')

    postDiv.classList.add('createPostForm')
    btnsDiv.classList.add('btnsDiv')
    userInfo.classList.add('userInfo')
    like.classList.add('btns')
    comment.classList.add('btns')
    share.classList.add('btns')
    commentInput.classList.add('commentInput')
    commentSubmit.classList.add('commentSubmit')
    commentSubmit.classList.add('submit')

    
    postContent.innerText = text
    img.src = "images/userImg.png"
    userName.innerText = "Ahmad Kawasmi"
    like.innerText = "Like"
    comment.innerText = "comment"
    share.innerText = "Share"
    commentInput.style.display = "none"
    commentSubmit.style.display = "none"
    commentInput.placeholder = "Add a comment"
    commentSubmit.innerText = "Submit"

    const likeBtn = function() {
        if(like.style.color == "gray"){
            like.style.color = "white"
            like.style.backgroundColor = "blue"
            like.innerText = "Liked"
        }else{
            like.style.color = "gray"
            like.style.backgroundColor = "white"
            like.innerText = "Like"
        }
    }

    like.addEventListener('click', likeBtn)

    const commentBtn = function() {
        if(comment.style.color == "gray"){
           commentInput.style.display ="block"
           commentSubmit.style.display = "block"
           comment.style.backgroundColor = "blue"
           comment.style.color = "white"
       }else{
           commentInput.style.display ="none"
           commentSubmit.style.display = "none"
           comment.style.backgroundColor = "white"
           comment.style.color = "gray"
       }
   }

    comment.addEventListener('click',commentBtn)

    const submitComment = function(){
        const commentDivForm = document.createElement('div')
        const commentValue = commentInput.value
        const comUserImg = document.createElement('img')
        const commentContent = document.createElement('h3')
        const commentName = document.createElement('h2')

        commentContent.innerText = commentValue
        commentName.innerText = "Ahmad kawasmi"
        comUserImg.src = 'images/userImg.png'

        commentContent.classList.add('commentContent')

        commentName.classList.add('commentName')
        commentDivForm.classList.add('commentDivForm')
        comUserImg.classList.add('commentImg')
       
        postDiv.append(commentDivForm)
       commentDivForm.append(comUserImg,commentName,commentContent)
       commentInput.value = ''
   }

   commentSubmit.addEventListener('click', submitComment)


    contentPs.append(postDiv)
    postDiv.append(userInfo)
    userInfo.append(img,userName)
    postDiv.append(postContent,btnsDiv,commentInput,commentSubmit)
    btnsDiv.append(like,comment,share)
    input.value = ""
}


function postRequairments(){
    if (input.value == "") {
        alert('ERROR : empty post can not be posted')
    }else{
        createNewPost()
    }
}

function EnterRequairments(event){
    if(event.key == 'Enter'){
       postRequairments()
    }}


btn.addEventListener('click', postRequairments)


input.addEventListener('keydown', EnterRequairments)