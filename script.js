function git() {
    var orignalName = document.getElementById("text").value;
    
    console.log(orignalName);
    
    fetch("https://api.github.com/users/" + orignalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);
        
        document.getElementById("result").innerHTML = `
            <div class="styled">
                <img id="img1" src="${data.avatar_url}" alt="user_avatar"><br>${data.login}<br>
                <h1>Name : ${data.name}</h1><br>
                <h1>Location: ${data.location}</h1><br>
                <h1>Total Repo: ${data.public_repos}</h1>
            </div>
        `;
    });
}
