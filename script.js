
sbt1.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!");
    let key = "ema_live_JOY40tVXRxRIJOCMENgZt2RbNRmFLQ3aK6DhQbX2"
    let email = document.getElementById("mail").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (let key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    console.log(str);
    res1.innerHTML = str;
})
