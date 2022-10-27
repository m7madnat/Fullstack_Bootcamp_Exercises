const urlTemplate = 'https://swapi.dev/api/people/'
let arrOfPeople = [];
async function getAllPeople() {    
    try{
    for(let i=1; i<=10; i++)
    {
        const request = await(await(fetch(`${urlTemplate}${i}`))).json();
        const planetRequest = await(await(fetch(request.homeworld))).json();

        let singlePerson = {
            name: request.name, 
            height: request.height, 
            hair: request.hair_color,
            planet: {
                planetName: planetRequest.name, 
                planetPopulation: planetRequest.population 
            }
        }
        arrOfPeople.push(singlePerson);
        console.log(singlePerson);
    }
    return arrOfPeople;
    }
    catch(err){
        console.log(err);
    }
}
function createTableRowHeading(){
    let trObj = document.createElement('tr');
    trObj.style.border = '1px solid black'
    let temp = document.createElement('td')    
    temp.classList.add('td');
    temp.innerHTML='Name';
    trObj.appendChild(temp)
    temp = document.createElement('td');
    temp.classList.add('td');
    temp.innerHTML='Hair'
    trObj.appendChild(temp)
    temp = document.createElement('td');
    temp.classList.add('td');
    temp.innerHTML='Height'
    trObj.appendChild(temp)
    temp = document.createElement('td');
    temp.classList.add('td');
    temp.innerHTML='Planet Name'
    trObj.appendChild(temp)
    temp = document.createElement('td');
    temp.classList.add('td');
    temp.innerHTML='Planet Population'
    trObj.appendChild(temp)
    return trObj;
}

function createTableRow(person){

    let trObj = document.createElement('tr');
    trObj.style.border = '1px solid black'

    let temp = document.createElement('td')
    temp.innerHTML=`${person.name}`;    
    trObj.appendChild(temp)

    temp = document.createElement('td');
    temp.innerHTML=`${person.hair}`;    
    trObj.appendChild(temp)

    temp = document.createElement('td');
    temp.innerHTML=`${person.height}`;    
    trObj.appendChild(temp)

    temp = document.createElement('td');
    temp.innerHTML=`${person.planet.planetName}`;    
    trObj.appendChild(temp)

    temp = document.createElement('td');
    temp.innerHTML=`${person.planet.planetPopulation}`;    
    trObj.appendChild(temp)

    return trObj;
}

function createTable(res) {
    let tableObj = document.createElement('table');
    tableObj.classList.add('table');

    let caption = tableObj.createCaption();
    caption.textContent = 'Star Wars';
    caption.classList.add('caption');

    tableObj.appendChild(createTableRowHeading());

    res.forEach(person => {
        tableObj.appendChild(createTableRow(person));        
    });

    document.body.appendChild(tableObj);
}

async function createBoth() {
    let res = await getAllPeople();
    createTable(res);
    btnObj.style.display = 'none';
}
let btnObj = document.querySelector('#btn');

btnObj.addEventListener('click',createBoth);