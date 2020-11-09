const alphabetArray = [{
        letter: 'A',
        food: ['Avocados']
    },
    {
        letter: 'B',
        food: ['Bread (milk breads [e.g. brioche, soda, naan] or any bread containing milk as an ingredient [croissants])'
             , 'Breastmilk','Buttermilk', 'Buttermilk solids']
      
    },
    {
        letter: 'C',
        food: ['Canned fish',
            'Casein',
            'Celery',
            'Cheese: including cottage cheese, cream cheese, vegetarian cheese, and other cheese-based products',
            'Cherries',
            'Chickpeas',
            'Coleslaw',
            'Confectionary (milk chocolate, white chocolate, toffee, fudge, caramel)',
            'Cow’s milk (including full fat, semi-skimmed, skimmed UHT milk, milk shakes)',
            'Cream (including double, single, whipping, clotted, and artificial)',
            'Cream soups and chowders',
            'Curds',
            'Custards made with milk'

        ]

    },
    {
        letter: 'D',
        food: ['Dips (made with milk products)',
            'Dry milk and other coffee creamers',
            'Dry milk protein'
        ]
    },
    {
        letter: 'E',
        food: ['Equal® Sweetener (in tablet form)','Evaporated and condensed milk']
    },
    {
        letter: 'F',
        food: ['Falafel',
            'Fish sticks and other fish in batter and breadcrumbs',
            'Flavored potato chips',
            'Fromage frais, crème fraiche, sour cream'
        ]
    },

    {
        letter: 'G',
        food: ['Garbanzo beans (also called chickpeas)',
            'Ghee: a clarified butter commonly used in Indian cooking',
            'Goat’s Milk'
        ]
    },
    {
        letter: 'H',
        food: ['Hummus','Hydrolyzed protein: when made from casein or whey']
    },
    {
        letter: 'I',
        food: ['Ice cream (made from dairy)']
    },
    {
        letter: 'L',
        food: ['Lactalbumin: also called milk albuminate', 
                'Lactoglobulin', 
                'Lactose (including all lactose-free milk and milk products)',
                'Legumes (dried peas, baked beans, lentils)'
            ]
    },
    {
        letter: 'M',
        food: ['Margarine: however, a few diet margarines or Kosher margarines do not contain milk products and are acceptable. If margarine is listed as an ingredient, check with the manufacturer to make sure it is milk-free',
            'Mashed potatoes (including instant mashed potatoes; check for milk or butter added)',
            'Milk (and all milk products)',
            'Milk chocolate',
            'Milk solids',
            'Miso'
        ]
    },
    {
        letter: 'N',
        food: ['Natto (Japanese fermented soy bean)', 'Nonfat dry milks', 'Nonfat dry milk solids','Nonfat milk']
    },
    {
        letter: 'O',
        food: ['Organ meats - these include: liver, heart, kidney, brains, pancreas, sweetbreads, and pâté. These are often listed as “meat by products” on food labels']
    },
    {
        letter: 'P',
        food: ['Potato salad', 
               'Processed and pre-packed meat and fish (e.g., “lunch meats”, some sausages)', 
               'Processed meats made with batter or breadcrumbs that have milk-based ingredients']
    },
    {
        letter: 'S',
        food: ['Sauces made with milks (white sauce, parsley sauce, butter sauce, and cheese sauce)', 
                'Sherbet: contains nonfat dry milk. This is different from sorbet, which is more like a fruit ice and is often acceptable',
                'Soups (cream soups, chowders, canned, packet, or fresh soups made with milk or cream)',
                'Sour cream',
                'Soy sauce'
            ]
    },
    {
        letter: 'T',
        food: ['Tempeh']
    },
    {
        letter: 'V',
        food: ['Vegetables in batter or breadcrumbs','Vegetable spreads—most contain milk products']
    },
    {
        letter: 'W',
        food: ['Whey and whey solids','Whipped cream']
    },
    {
        letter: 'Y',
        food: ['Yogurt and yogurt drinks (made from dairy)']
    }
]
const giantLetter = document.querySelector('#diet--giant-letter');
const prevBtn = document.querySelector('#diet-alphabet--prev-btn');
const nextBtn = document.querySelector('#diet-alphabet--next-btn');
const btnArray = [];
const higlightArray = [];

function initAlphabet() {
    var letterContainer = document.querySelector('#diet-letters');
    prevBtn.style.opacity = ".2";
    prevBtn.style.cursor = "pointer";
    nextBtn.style.cursor = "pointer";
    nextBtn.addEventListener("click", nextBtnClickHandler)
    nextBtn.addEventListener("mouseover", sliderBtnHandlerOver)
    nextBtn.addEventListener("mouseout", sliderBtnHandlerOut)
    for (var i = 0; i < alphabetArray.length; i++) {
        // var btnHiglight = document.createElement('div');
        // btnHiglight.classList.add('diet-alphabet--letter-btns-bar', 'text-center');
        // btnHiglight.id = 'higlight--letter-' + alphabetArray[i].letter;
        // btnHiglight.style.opacity = "0";
        var letter = document.createElement('p');
        letter.classList.add('diet-alphabet--letter-btns');
        letter.innerHTML = alphabetArray[i].letter;
        letter.id = "btn--letter-" + alphabetArray[i].letter;
        btnArray.push(letter.id);
        //higlightArray.push(btnHiglight.id);
        letter.addEventListener("click", letterClickHandler)
        letter.addEventListener("mouseover", letterMouseOverHandler)
        letter.addEventListener("mouseout", letterMouseOutHandler)
            // letter.appendChild(btnHiglight);
        letterContainer.appendChild(letter);

    }
}

function nextBtnClickHandler(event) {
    this.style.opacity = '.2';
    prevBtn.style.opacity = '1';
    prevBtn.addEventListener("click", prevBtnClickHandler)
    document.querySelector('#diet-letters').style.marginLeft = "-690px";
}

function prevBtnClickHandler(event) {
    this.style.opacity = '.2';
    nextBtn.style.opacity = '1';
    document.querySelector('#diet-letters').style.marginLeft = "0px";
}

function sliderBtnHandlerOver(event) {
    //this.style.opacity = '.2';
}

function sliderBtnHandlerOut(event) {
    //this.style.opacity = '1';
}

function letterMouseOverHandler(event) {
    this.style.opacity = "1";
    this.classList.add('diet-alphabet--btn-border');
}

function letterMouseOutHandler(event) {
    this.style.opacity = ".2";
    this.classList.remove('diet-alphabet--btn-border');
}

function letterClickHandler(event) {
    var index;
    for (var i = 0; i < alphabetArray.length; i++) {
        if (event.target.innerHTML === alphabetArray[i].letter) {
            index = i;
            giantLetter.innerHTML = alphabetArray[i].letter;


        }
        document.querySelector('#' + btnArray[i]).style.opacity = ".2";
        document.querySelector('#' + btnArray[i]).classList.remove('diet-alphabet--btn-border');
        document.querySelector('#' + btnArray[i]).addEventListener("mouseover", letterMouseOverHandler)
        document.querySelector('#' + btnArray[i]).addEventListener("mouseout", letterMouseOutHandler)
    }

    document.querySelector('#' + btnArray[index]).style.opacity = "1";
    document.querySelector('#' + btnArray[index]).classList.add('diet-alphabet--btn-border');
    document.querySelector('#' + btnArray[index]).removeEventListener("mouseover", letterMouseOverHandler)
    document.querySelector('#' + btnArray[index]).removeEventListener("mouseout", letterMouseOutHandler)

    //console.log(alphabetArray[index].food);


    initDietSelection(alphabetArray[index].food);
}

function initDietSelection(foodArray) {
    const dietSelectionContainer = document.querySelector('#diet-alphabet--selection');
    const dietSelectionList = document.querySelector('#diet-alphabet--selection-list');
    dietSelectionContainer.style.display = 'block';

    if (document.querySelector('#diet-alphabet--selection-list').hasChildNodes()) {
        document.querySelector('#diet-alphabet--selection-list').innerHTML = ''
    }

    for (var i = 0; i < foodArray.length; i++) {

        var li = document.createElement('li')
        
        var paragraph = document.createElement('p');
        paragraph.style.marginBottom="8px";
        paragraph.classList.add('paragraph-text--medium-condensed-20')
        paragraph.innerHTML = foodArray[i];

        li.appendChild(paragraph);
        dietSelectionList.appendChild(li);

    }




}

initAlphabet();