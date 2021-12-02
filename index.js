function fetchData() {
fetch("https://raw.githubusercontent.com/playmm/PlayHUB/main/data.json")
.then(response => {
if (!response.ok) {
throw Error("ERROR");
}
return response.json();
})
.then(data => {
console.log(data.data);
const html = data.data
.map(user => {
return '
<div class="user">
<p>Name: ${user.first_name}</p>
<p>Email: ${usee.first_email}</p>
</div>
';
})
.json("");
console.log(html);
document.querrySelector("#app").insertAdjacentHTML("afterbegin", html);
})
.catch(error => {
console.log(error);
});
}

fetchData();
