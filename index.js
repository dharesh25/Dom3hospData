// fill in javascript code here


// fill in javascript code here
const form = document.querySelector('form');
const stuName = document.getElementById('name');
const emplyId = document.getElementById('docID');
const depart = document.getElementById('dept');
const exper = document.getElementById('exp');
const email = document.getElementById('email');
const mob = document.getElementById('mbl');
const allData = [];

const tbody = document.querySelector('tbody');

form.addEventListener('submit',function(e)
{
    e.preventDefault();

    let data = {}
    data.inp1 = stuName.value;
    data.inp2 = emplyId.value;
    data.inp3 = depart.value;
    data.inp4 = exper.value;
    data.inp5 = email.value;
    data.inp6 = mob.value;
    data.inp7;

    if (exper > 5) {
        data.inp7 = "Senior";
    } else if (exper >= 2 && exper <= 5) {
        data.inp7 = "Junior";
    } else {
        data.inp7 = "Fresher";
    }
    
    allData.push(data)
    
    tbody.innerHTML = null;

    allData.map((ele, index)=>
    {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');

        td1.innerText = ele.inp1;
        td2.innerText = ele.inp2;
        td3.innerText = ele.inp3;
        td4.innerText = ele.inp4;
        td5.innerText = ele.inp5;
        td6.innerText = ele.inp6;
        td7.innerText = ele.inp7;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {

            allData.splice(index, 1);
            tbody.removeChild(row);
        });

        td8.appendChild(deleteButton);

        row.append(td1,td2,td3,td4,td5,td6,td7,td8)
        tbody.append(row)
    })
})