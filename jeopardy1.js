let categories = [
    { title: "Math",
     clues: [
       {question: "2+2", answer: 4, showing: null},
     ],
    },
   { title: "Literature",
     clues: [
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
     ],
    },
    { title: "Geography",
    clues: [
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    ],
   },
   { title: "History",
   clues: [
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
   ],
  },
  { title: "Science",
  clues: [
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
  ],
 },
 { title: "English",
 clues: [
   {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 ],
},
{ title: "Math1",
     clues: [
       {question: "4+4", answer: 4, showing: null},
     ],
    },
   { title: "Literature1",
     clues: [
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null}
     ],
    },
    { title: "Geography1",
    clues: [
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null}
    ],
   },
   { title: "History1",
   clues: [
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null},
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null}
   ],
  },
  { title: "Science1",
  clues: [
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null},
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null}
  ],
 },
 { title: "English1",
 clues: [
   {question: "Hamlet Author", answer: "Shakespeare", showing: null},
   {question: "Bell Jar Author", answer: "Plath", showing: null},
   {question: "Hamlet Author", answer: "Shakespeare", showing: null},
   {question: "Bell Jar Author", answer: "Plath", showing: null},
   {question: "Bell Jar Author", answer: "Plath", showing: null}
 ],
},
{ title: "Math2",
     clues: [
       {question: "2+2", answer: 4, showing: null},
       {question: "1+1", answer: 2, showing: null},
       {question: "2+2", answer: 4, showing: null},
       {question: "1+1", answer: 2, showing: null},
       {question: "1+1", answer: 2, showing: null}
     ],
    },
   { title: "Literature2",
     clues: [
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null}
     ],
    },
    { title: "Geography2",
    clues: [
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null},
        {question: "Bell Jar Author", answer: "Plath", showing: null}
    ],
   },
   { title: "History2",
   clues: [
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null},
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null}
   ],
  },
  { title: "Science2",
  clues: [
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null},
    {question: "Hamlet Author", answer: "Shakespeare", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null},
    {question: "Bell Jar Author", answer: "Plath", showing: null}
  ],
 },
 { title: "English2",
 clues: [
   {question: "Hamlet Author", answer: "Shakespeare", showing: null},
   {question: "Bell Jar Author", answer: "Plath", showing: null},
   {question: "Hamlet Author", answer: "Shakespeare", showing: null},
   {question: "Bell Jar Author", answer: "Plath", showing: null},
   {question: "Bell Jar Author", answer: "Plath", showing: null}
 ],
}
];


const game = document.getElementById('jeopardy');
const tabBody = document.getElementById('tbody');
const tabHead = document.getElementById('thead');
categories.splice(6);


function getCategoryIds() {
    let catId = Object.values(
        categories.reduce((r, a) =>(
        (r[a.clues] = r[a.clues] || []).push(a), r
        ),{})
)
        
}
getCategoryIds();
/*
function getCategory(){
Promoise.all(categories).then(results => {
    results.forEach((categories, catId) =>{
        let clueId =[];
        let newCategory = {
            title: categories.title,
            clues: catId
        }

        this.shuffle(categories.clues).splice(0,5).forEach((clue, index) => {
            clueId = catId +"-" + index;
            newCategory.clues.push(clueId);

            this.clues[clueId] = {
                question: clue.question,
                answer: clue.answer,
                value: (index +1) *100
            }
        })
        this.categories.push(newCategory);
    })
    
})
}

function fillTable(){
const headers = ["title", "clues","question"];
    let table = document.createElement("TABLE");  
        
    for(let i = 0; i < categories.length; i++) {
        while(i<=6){
            i++
        
        let row = table.insertRow(i);
        let newTh = document.createElement("TH");
        let text = document.createTextNode(innerHTML.categories);
        newTh.appendChild(text);
        document.querySelector("thead").appendChild(newTh);
    
        let newTr = tabBody.insertRow();
           
        let newTd = newTr.insertCell();
        newTd.innerText = ("?");
        newTr.appendChild(newTd);
            

        row.insertCell(0).innerHTML = categories[i].question;
        row.insertCell(1).innerHTML = categories[i].answer;
        row.insertCell(2).innerHTML = categories[i].showing;

    }
    }

    let header = table.createTHead();
    let headerRow = header.insertRow(0);
    for(let j = 0; j < headers.length; j++) {
        headerRow.insertCell(j).innerHTML = headers[j];
        while(j<=5){
            j++
        }
    }

}
fillTable()
*/
function fillTable(categories) {
    for (let cat of categories) {
        let newTh = document.createElement("TH");
        let text = document.createTextNode(cat.title);
        newTh.appendChild(text);
        document.querySelector("thead").appendChild(newTh);

        let newTr = tabBody.insertRow();
        for(tac in categories){
           
        let newTd = newTr.insertCell();
        newTd.innerText = ("?");
        newTr.appendChild(newTd);
            
        newTd.setAttribute('data-question', JSON.stringify(cat.clues));
        
    }}
    
}
fillTable(categories);


$(document).on("click", "td",function(){
    let $this = $(this);
    let $value = $('data-question', {
        value: $this.text(),
        type: 'text',
        blur: function() {
           $this.text(this.value);
        },
        keyup: function(e) {
           if (e.which === 13) $value.blur();
        }
    }).appendTo( $this.empty() ).focus();
});


restart.addEventListener('click', function () {
    location.reload();
    shuffle(categories);
})

$(document).ready(function () {
    alert("Ready!");
});

/*
for (let item in Foods) {
  Foods[item].forEach(v => console.log(v.Category));
}

async function initialize() {
    await getCategoryIds() 
    await Promise.all(getCategory(catId)) 
    fillTable(categories); 
  }
  
  initialize()

async function getCategoryIds() {
    const response = await axios.get(`https://jservice.io/api/category?id=${catId}`);
	let questions = response.data.clues;
	let fiveUniqueQuest = shuffle(questions).slice(0, 5);
	let arrayClue = fiveUniqueQuest.map((result) => {
		return { question: result.question, answer: result.answer };
	});
	let categoryData = { title: response.data.title, clues: arrayClue };
	return categoryData;
    
    const response = await axios.get('http://jservice.io/api/categories?count=10');
    NUM_CATEGORIES = _.sampleSize(response.data, [n = 6]);

    for (let num of NUM_CATEGORIES) {
        let categoryID = num.id;
        catId.push(categoryID); 
    }
    return catId;
}
getCategoryIds();*/
/*
getCategory(catId);

function getCategory(){
    catId.forEach(async function (ID) {
        response = await axios.get('http://jservice.io/api/clues?category=' + ID);
        for (let i = 0; i < response.data.length; i++) {
            question = response.data[i].question;
            answer = response.data[i].answer;
            title = response.data[i].category.title;
            clues = response.data[i].clues;

            clueArray = _.sampleSize(clueArray, [n = 5]);
            clueArray.push({ question, answer });
        }

        clue.push(clueArray);
    })   
    return clue;
}
*/



/////Fix and edit
$(document.tbody).on('click', '.tbody *', function (e) {
    for (let cat1 of categories) {
        target = e.currentTarget;
        if (target = '#td') {
            for (let cat of categories) {
                target.innerHTML = cat.clueArray[i].question;
            }
        }
    }
});

function shuffle(categories) {
    let j, x, i;
    for (i = categories.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = categories[i];
        categories[i] = categories[j];
        categories[j] = x;
    }
    return categories;
}
/*
//Change card to correct tag
function shuffle() {
    categories.forEach(card => {
      let randomPos = Math.floor(Math.random() * 18);
      card.style.order = randomPos;
    });
  };



function setupAndStart() {
 }
*/