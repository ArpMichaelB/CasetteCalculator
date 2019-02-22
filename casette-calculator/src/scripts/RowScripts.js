import { increment } from "./IncrementScripts";

export const addRow = (event) =>
{
    var inputForm = event.target.parentElement.parentElement;
    //this following thing is bonkers
    //event.target.parentElement.parentElement.childNodes[event.target.parentElement.parentElement.childElementCount-2].lastChild
    //but what it's intended to mean is the last input row on the page's last child (i.e. the add a row button)
    if(inputForm.childNodes[inputForm.childElementCount-2].lastChild === event.target)
    {
        //first of all, add another row
        inputForm.insertBefore(event.target.parentElement.cloneNode(true),inputForm.lastChild);
        //then since none of the scripts got copied over, bind them
        var newRow = inputForm.childNodes[inputForm.childElementCount-2];
        newRow.childNodes[0].onchange = increment;
        newRow.childNodes[0].value = "";
        newRow.childNodes[2].onchange = increment;
        newRow.childNodes[2].value = "";
        newRow.lastChild.onclick = addRow;
        //then, for each row except for the newest one, hide the add a new row button
        inputForm.childNodes.forEach(function(element){
            if(element === inputForm.lastChild)
            {
                //here to make sure we don't make the calculate button stop doin an exist
            }
            else if(element !== inputForm.childNodes[inputForm.childElementCount-2])
            {
                element.lastChild.style.display = "none";
            }
        });
    }
}