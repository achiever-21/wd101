// getting the form data from local

let getfromlocal=()=>{
    let entries_in = localStorage.getItem("keys");
    if (entries_in){
        entries_in= JSON.parse(entries_in);
    }
    else{
        entries_in=[];
    }
    return entries_in;
}

let entries=getfromlocal();


// getting the form data from display
let display=()=>{
    let entries=getfromlocal();
    let table1 = entries.map((e)=>{
        let namecell=`<td>${e.name}</td>`;
        let emailcell=`<td>${e.email}</td>`;
        let dobcell=`<td>${e.dob}</td>`;
        let passwordcell=`<td>${e.password}</td>`;
        let acceptedcell=`<td>${e.accepted}</td>`;
        let row=`&nbsp<tr>${namecell}&nbsp${emailcell}&nbsp${passwordcell}&nbsp${dobcell}&nbsp${acceptedcell}`;
        return row;

    }).join("\n")
    let table2=`<table><tr><th>Name &nbsp &nbsp  </th>
    <th>Email &nbsp &nbsp  </th>
    <th>Password  &nbsp &nbsp </th>
    <th>Dob    &nbsp &nbsp            </th> 
    <th>Accepted terms? </th>
    

    </tr>
    <tr>${table1}</tr></table>`;
    let table3=document.getElementById("entrieskeys");
    table3.innerHTML=table2;

}


let savetolocal=(event)=>{
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let dob=document.getElementById("dob").value;
    let password=document.getElementById("password").value;
    let accepted=document.getElementById("terms").checked;


    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const newmail=email;
    if (!newmail.match(validRegex)){
        window.alert("enter a valid email adress");
        return 
    }
   
     
    const newdate=new Date(dob);
    const today=new Date();
    const age=(new Date(today.getFullYear()-55,today.getMonth(),today.getMonth()));
    const age2=(new Date(today.getFullYear()-18 ,today.getMonth(),today.getDate()));
    if (newdate<age || newdate>age2){
        window.alert("you must be 18 years old to register");
        return 
       
    }


    let entry={
        name,email,dob,password,accepted
    }
   //entries = getfromlocal();

    entries.push(entry);
    localStorage.setItem("keys",JSON.stringify(entries));
    display();
}



let submittedform=document.getElementById("submitforum");



submittedform.addEventListener("submit",savetolocal);

display();
