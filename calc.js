const inputVal = document.getElementById('inputVal');
const subVal = document.getElementById('subVal');
const historyDiv = document.getElementById('historyDiv');


function getValue(val)
{
    if(inputVal.value != 0)
        inputVal.value += val;
    else
        inputVal.value = val;
}

function clearAll()
{
    inputVal.value = "0";
    subVal.value = "";
}

function removeLastDigit()
{
    if(inputVal.value.length > 1)
        inputVal.value = inputVal.value.slice(0, -1);
    else
    {
        inputVal.value = inputVal.value.slice(0, -1);
        inputVal.value = "0";
    }
}

function solve()
{
    var equation = inputVal.value;
    var ans = eval(equation);

    subVal.value = equation + "=";
    inputVal.value = ans;

    showHistory(equation, ans);
}

function showHistory(equation, ans)
{
    historyDiv.innerHTML += `
            <div class="his">
                <p>${equation} =</p>
                <p>${ans}</p>
            </div>
    `;
}

function clearHistory()
{
    var choice = confirm("Are you sure you want to delete history ?");
    if(choice)
    {
        historyDiv.innerHTML = "";
    }
}

// template/String literals
// var a = 5;
// console.log(value of a is ${a});