

const selectedPostDiv = document.getElementById('selectedPost');
const selectedImage = document.getElementById('selectedImage');
const selectedTitle = document.getElementById('selectedTitle');
const selectedDate = document.getElementById('selectedDate');
const selectedDescription = document.getElementById('selectedDescription');
const editButton = document.getElementById('editButton');

// Show a selected post
function showSelectedPost(post) {
    selectedImage.src = post.imageURL;
    selectedTitle.textContent = post.title;
    selectedDate.textContent = post.date;
    selectedDescription.textContent = post.description;
    selectedPostDiv.style.display = 'block';
}

// Edit button click event
editButton.addEventListener('click', () => {
    const newTitle = prompt('Enter new title:');
    const newDescription = prompt('Enter new description:');

    if (newTitle && newDescription) {
        const userId = firebase.auth().currentUser.uid;
        const postId = selectedPostId; // You need to set this variable to the selected post's ID
        const postRef = database.ref('users/' + userId + '/posts/' + postId);

        postRef.update({
            title: newTitle,
            description: newDescription
        });
    }
});

// ... Rest of the code ...



// ... Rest of the code ...


