export const setLength = (event) =>
{
    var calculateButton = document.getElementsByClassName("calculationButton")[0];
    calculateButton.setAttribute("limit",event.target.value);
}