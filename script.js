let likedItems = [];

function likeProduct(name, size) {
    const product = { name, size };
    likedItems.push(product);
    localStorage.setItem('likes', JSON.stringify(likedItems));
    alert(`${name} (${size}) добавлен в Избранные!`);
}

function displayLikes() {
    const likesContainer = document.getElementById('likes');
    likedItems = JSON.parse(localStorage.getItem('likes')) || [];
    likesContainer.innerHTML = likedItems
        .map(item => `<div>${item.name} (${item.size})</div>`)
        .join('');
}
