
var trivia =  [

 
        {
            category: "History",
            type: "multiple",
            difficulty: "easy",
            question: "The idea of Socialism was articulated and advanced by whom?",
            correct_answer: "Karl Marx",
            incorrect_answers: [
                "Vladimir Lenin",
                "Joseph Stalin",
                "Vladimir Putin"
            ]
        },
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "medium",
            question: "What is the perk that was introduced in the Call Of Duty:?",
            correct_answer: "Electric Cherry",
            incorrect_answers: [
                "Quick Revive",
                "Vulture Aid",
                "Tombstone"
            ]
        }
    ]


var triviaList = document.getElementById("trivia")

for (var i = 0; i < trivia.length; i++) {
    var newItem = document.createElement("h3")
    var newItem2 = document.createElement("p")
    var newItem3 = document.createElement("p")
    var newItem4 = document.createElement("p")
    var newItem5 = document.createElement("p")
    newItem.textContent = trivia[i].category
    newItem2.textContent = trivia[i].type
    newItem3.textContent = trivia[i].difficulty
    newItem4.textContent = trivia[i].question
    newItem5.textContent = trivia[i].correct_answer
    triviaList.append(newItem)
    triviaList.append(newItem2)
    triviaList.append(newItem3)
    triviaList.append(newItem4)
    triviaList.append(newItem5)

    for (var j = 0; j < trivia[i].incorrect_answers.length; j++) {
        var newItem = document.createElement("p")
        newItem.textContent = trivia[i].incorrect_answers[j]
        triviaList.append(newItem)
    }

}
