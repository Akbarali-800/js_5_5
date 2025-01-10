const userName = prompt("Ismingizni kiriting:");
if (userName == "") {
    alert("Iltimos, ismingizni kiriting!");
    userName = prompt("Ismingizni kiriting:");
}

const userId = prompt("ID kiriting:");
if (userId == "") {
    alert("Iltimos, ID kiriting!");
    userId = prompt("ID kiriting:");
}

const userPass = prompt("Parolingizni kiriting:");
if (userPass == "") {
    alert("Iltimos, parolingizni kiriting!");
    userPass = prompt("Parolingizni kiriting:");
}

const user = {
    ism: userName,
    id: userId,
    parol: userPass,
};                                                                                                                                         

console.log(user);

alert(
    `Ism: ${"Spacega xush kelibsiz"}\n` +     
    `Ism: ${user.ism}\n` +     
    `ID: ${user.id}\n` +
    `Parol: ${user.parol}`
);