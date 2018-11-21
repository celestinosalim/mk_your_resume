let options = {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
name: obj.name,
objective: obj.objective,
education: obj.education,
experience: obj.experience
})
