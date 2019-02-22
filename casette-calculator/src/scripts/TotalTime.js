export const totalTime = (event) =>
{
    var form = event.target.parentElement;
    var totalSeconds = 0;
    form.childNodes.forEach(element => {
        if(element !== event.target)
        {
            var minutes = element.childNodes[0].value;
            var seconds = element.childNodes[2].value;
            if(seconds !== "")
            {
                totalSeconds += parseInt(seconds);
            }
            if(minutes !== "")
            {
                totalSeconds += parseInt(minutes)*60;
            }
            //TODO: if totalseconds = casettelength/2, append a "halfway marker" to the row
        }
    });
    var totalDisplayer = document.createElement("div");
    totalDisplayer.className = "timeDisplay";
    //TODO: if total time is greater than selected casette, change the class of totalDisplayer so that it's the red^tm
    var totalText = document.createTextNode("Total Time is " + parseInt(totalSeconds/60) + ":" + totalSeconds%60);
    if(totalText.data.search(/:[0-9]$/g) >=0)
    {
        totalText.data = totalText.data.replace(/:[0-9]$/g,":0" + totalText.data.charAt(totalText.data.length-1));
    }
    totalDisplayer.appendChild(totalText);
    if(form.parentElement.lastChild.className.search("timeDisplay") >= 0)
    {
        form.parentElement.lastChild.innerHTML = totalText.data;
    }
    else
    {
        form.parentElement.appendChild(totalDisplayer);
    }
}