let options = {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
name: obj.name,
objective: obj.objective,
education: obj.education,
experience: obj.experience
})

{
"user": [
{
"name": "Celestino Salim",
"contact": {
"email": "celestino.salim@gmail.com",
"phone": "646-704-8637"
},
"resume": [
{
"id": 1,
"name": "My First Resume",
"objective": "Highly motivated electronics engineer, with a background in business management and customer service, looking for a full time opportunity as a junior python programmer.",
"education": ["Flatiron School", "NYU", "Access Lab"],
"experience": ["Student", "Software Engineer", "Freelance"]
},
{
"id": 2,
"name": "My Second Resume",
"objective": "Highly motivated electronics engineer, with a background in business management and customer service, looking for a full time opportunity as a junior python programmer.",
"education": [
"Flatiron School",
"Waiter School that doesnt exist",
"Access Lab"
],
"experience": ["Student", "Waiter", "Freelance"]
}
]
}
]
}
