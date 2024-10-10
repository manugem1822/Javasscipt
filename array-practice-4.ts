const profileName = {
    name: "Honey",
    age: 22,
    email: "honey94@gmail.com",
    hobby: []
}
const updateProfile = (name, hobby) => {
    if (name) profileName.name = name;
    if (hobby) profileName.hobby = hobby
    return profileName;
}
console.log(updateProfile("footbal"));
