let inputs = document.querySelectorAll("input")
let table = document.querySelector("table")
let submitBtn = document.querySelector("#a")

let row

function formHandle(){
    event.preventDefault()
    let userName = inputs[0].value
    let userPlace = inputs[1].value


    if(submitBtn.innerText=="Submit"){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let updateBtn = document.createElement("button")
        let deleteBtn = document.createElement("button")

        updateBtn.innerText = "Update"
        deleteBtn.innerText = "Delete"

        td1.innerText = userName
        td2.innerText = userPlace
        td3.append(updateBtn,deleteBtn)

        tr.append(td1,td2,td3)
        table.append(tr)

        updateBtn.addEventListener("click",()=>{
            submitBtn.innerText = "Update"
            inputs[0].value = td1.innerText
            inputs[1].value = td2.innerText
        })

        deleteBtn.addEventListener("click",()=>{
            tr.remove()
        })

        inputs[0].value = ""
        inputs[1].value = ""

        row = tr
        }
        else if(submitBtn.innerText == "Update"){
            console.log(row.cells);

            row.cells[0].innerText = inputs[0].value
            row.cells[1].innerText = inputs[1].value

            inputs[0].value = ""
            inputs[1].value = ""
            submitBtn.innerText = "Submit"
        }

}




