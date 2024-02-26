function isHtml(path) {
    return path.endsWith(".html");
}

const path = "/users/download/index.html";
console.log(isHtml(path)); // Выведет true