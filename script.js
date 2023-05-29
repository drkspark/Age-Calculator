const dateEle = document.getElementById("birthday");
const btnEle = document.getElementById("btn");
const outEle = document.getElementById("result");

function getAge(dob) {
    dob = new Date(dob);
    let currDate = new Date();

    let age = currDate.getFullYear() - dob.getFullYear();

    if (age < 0) {
        return NaN;
    }

    let dobMonth = dob.getMonth();
    let currMonth = currDate.getMonth();
    if (age === 0 && dobMonth > currMonth) {
        return NaN;
    } else if (
        age === 0 &&
        dobMonth == currMonth &&
        dob.getDate() > currDate.getDate()
    ) {
        return NaN;
    } else if (dobMonth === currMonth) {
        if (dob.getDate() > currDate.getDate()) {
            --age;
        }
    } else if (dobMonth >= currMonth) {
        --age;
    }

    return age;
}

function calculateAge() {
    let dob = dateEle.value;

    if (dob === "") {
        alert("Please enter DOB");
    } else {
        const age = getAge(dob);

        if (isNaN(age)) {
            alert("Please Enter valid DOB");
        } else {
            outEle.innerText = `Your age is ${age} ${
                age > 1 ? "years" : "year"
            }`;
        }
    }
}

btnEle.addEventListener("click", calculateAge);
