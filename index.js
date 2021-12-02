function fetchData() {
fetch("https://reqres.in/api/users")
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
<p><imag> src="${user.avatar}" alt="${user.first_name}" /></p>
<p>Name: ${user.first_name}</p>
<p>Email: ${user.email}</p>
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
