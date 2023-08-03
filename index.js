// get table element
let table = document.getElementById("table");

// load json file assuming we have a server to make http request
fetch('./test.json')
    // get data from json
    .then(res => res.json())
    .then(data => teams(data))

function teams(data){
    console.log(data);
    // fill teams array from json
    const teams = [];
    for(let team in data){
        teams.push(team);
    }
    console.log(teams);

    // create table
    // create top left cell
    let row = table.insertRow(0);
    let header = document.createElement("th");
    header.innerHTML = 'Tm';
    row.appendChild(header);
    // iterate through teams, create header row
    for(let i = 0; i < teams.length; i++){
        let header = document.createElement("th");
        header.innerHTML = teams[i];
        row.appendChild(header);
    }
    // iterate through wins vs opp, create data cells
    for(let i = 0; i < teams.length; i++){
        let row = table.insertRow(i+1);
        let td = row.insertCell(0);
        td.innerHTML = teams[i];
        for(let j = 0; j < teams.length; j++){
            let td = row.insertCell(j+1);
            // insert wins vs team if not same team
            // Ex: BRO v. BRO
            if(i!=j){
                td.innerHTML = data[teams[i]][teams[j]].W;
            }
            else{
                td.innerHTML = "--";
            }
        }
    }

    // create bottom header
    let bottRow = table.insertRow(-1);
    let th = document.createElement("th");
    th.innerHTML = "Tm";
    bottRow.appendChild(th);
    for(let i = 0; i < teams.length; i++){
        let th = document.createElement("th");
        th.innerHTML = teams[i];
        bottRow.appendChild(th);
    }
    
}
