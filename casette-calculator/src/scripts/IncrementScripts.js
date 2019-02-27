export const increment = (event)=>
{
    if(event.target.className==="minute")
    {
        event.target.value = event.target.value.replace(/[^0-9]/g,"");
        //so turns out regular expressions are a whole argument type in JS instead of having strings of the given regex
        //unlike the seconds input, this only needs to be numbers, so we don't need nearly as much bells and whistles in the fallback
    }
    else if(event.target.className==="second")
    {
        event.target.value = event.target.value.replace(/[^0-9]/g,"");
        //so turns out regular expressions are a whole argument type in JS instead of having strings of the given regex
        var value = parseInt(event.target.value,10);
        if(value>60)
        {
            event.target.value = 60;
        }
        //these lines are only used in the case of the input box not being a number type
        if(parseInt(event.target.value,10) === 60)
        {
            event.target.value = 0;
            if(event.target.previousElementSibling.value !== "")
            {
                var minutes = parseInt(event.target.previousElementSibling.value, 10);
                minutes +=1;
                event.target.previousElementSibling.value = minutes;
            }
            else
            {
                event.target.previousElementSibling.value = 1;
            }
        }
    }
}