var student = {
    name: 'Jordan',
    age: 12,
    city: 'PG'
};

for (var key in student) {
    console.log(key + " => " + student[key]);
}