//THIS IS  A COLLEGE FINDER USING AN API 
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.getElementById("btn");
btn.addEventListener("click", async () => {

    console.log("CLICK");
    let text = document.getElementById("txt");
    let country = text.value;
    await college(country);

})
async function college(country) {
    try {
        let response = await fetch(url + country);
        let raw = await response.json();

        show(raw);
    } catch (e) {
        console.log("Error ", e);
        return [];
    }
}
function show(raw) {
    let list = document.getElementById("list");
    list.innerText = "";
    for (r of raw) {
        console.log(r.name);
        let li = document.createElement("li");
        li.innerText = r.name;
        list.appendChild(li);
    }

}
