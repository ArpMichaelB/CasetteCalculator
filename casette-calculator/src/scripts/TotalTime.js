export const totalTime = (event) =>
{
    var form = event.target.parentElement;
    var totalSeconds = 0;
    for(var i = 0;i<form.childElementCount;i++){
        var element = form.childNodes[i];
        if(element !== event.target)
        {
            var minutes = element.childNodes[0].value;
            var seconds = element.childNodes[2].value;
            if(seconds !== "")
            {
                totalSeconds += parseInt(seconds);
            }
            else
            {
                seconds = 0;
            }
            if(minutes !== "")
            {
                totalSeconds += parseInt(minutes)*60;
            }
            else
            {
                minutes = 0;
            }
            if(!document.getElementsByClassName("halfway").length)
            {
                if(totalSeconds === (parseInt(event.target.getAttribute("limit"))*60)/2)
                {
                    var halfwayMark = document.createElement("span");
                    halfwayMark.appendChild(document.createTextNode("✓"));
                    halfwayMark.className = "halfway";
                    form.childNodes[i].insertBefore(halfwayMark,form.childNodes[i].lastChild);
                }
                //this following if statement is a WHOLE mess
                //but what it's checking is, if the current row is more than to the halfway point
                //and the previous row is less than the halfway point
                //and we don't have an exactly halfway-making row
                //that previous row is the end of the "a side"
                else if(totalSeconds > (parseInt(event.target.getAttribute("limit"))*60)/2 && totalSeconds-(seconds+(minutes*60)) < (parseInt(event.target.getAttribute("limit"))*60)/2)
                {
                    halfwayMark = document.createElement("span");
                    halfwayMark.appendChild(document.createTextNode("✓"));
                    halfwayMark.className = "halfway";
                    if(i-1>=0)
                    {
                        form.childNodes[i-1].insertBefore(halfwayMark,form.childNodes[i-1].lastChild);
                    }
                    else
                    {
                        form.childNodes[0].insertBefore(halfwayMark,form.childNodes[0].lastChild);
                    }
                }
            }
            //if there's already a halfway mark, don't put one on the page
        }
    }
    var totalDisplayer = document.createElement("div");
    totalDisplayer.className = "timeDisplay";
    if(totalSeconds > parseInt(event.target.getAttribute("limit")*60) && event.target.getAttribute("limit") !== null)
    {
        totalDisplayer.className += "Overlimit";
    }
    var totalText = document.createTextNode("Total Time is " + parseInt(totalSeconds/60) + ":" + totalSeconds%60);
    if(totalText.data.search(/:[0-9]$/g) >=0)
    {
        totalText.data = totalText.data.replace(/:[0-9]$/g,":0" + totalText.data.charAt(totalText.data.length-1));
    }
    totalDisplayer.appendChild(totalText);
    if(form.parentElement.lastChild.className.search("timeDisplay") >= 0)
    {
        form.parentElement.lastChild.innerHTML = totalText.data;
        if(totalDisplayer.className === "timeDisplayOverlimit")
        {
            form.parentElement.lastChild.className = "timeDisplayOverLimit";
        }
    }
    else
    {
        form.parentElement.appendChild(totalDisplayer);
    }
}