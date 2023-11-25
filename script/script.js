import marks from './data.json' assert {type : 'json'};

let marks_arr = [];

marks.forEach(function(mark) // for each
{
    for(var key in mark) // for in
    {
        if(key == "score")
            marks_arr.push(mark[key]);
    }
});

let sum = 0;
marks_arr.forEach(function(mark)
{
    sum += mark;
}
);

let avg = Math.floor(sum / marks_arr.length);


// DOM Part
let reaction = document.querySelector("#reaction-score");
reaction.innerHTML = `${marks_arr[0]}&#160;/`

let memory = document.querySelector("#memory-score");
memory.innerHTML = `${marks_arr[1]}&#160;/`

let verbal = document.querySelector("#verbal-score");
verbal.innerHTML = `${marks_arr[2]}&#160;/`

let visual = document.querySelector("#visual-score");
visual.innerHTML = `${marks_arr[3]}&#160;/`

let result = document.querySelector("#circle-head");
result.innerHTML = `${avg}`;