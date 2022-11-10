let url ="index.json"

async function getCV() {
    let response = await fetch(url);
    if (response.ok) {
    let data = await response.json();
    console.log (data)
    console.log(data.MyCV[0].name);
    let CV = data.MyCV;
    console.log(typeof CV);

    



    }
}