var maleNames = {
    Sunday: 'Kwasi',
    Monday: 'Kwadwo',
    Tuesday: 'Kwabena',
    Wednesday: 'Kwaku',
    Thursday: 'Yaw',
    Friday: 'Kofi',
    Saturday: 'Kwame',
};

var femaleNames = {
    Sunday: 'Akosua',
    Monday: 'Adwoa',
    Tuesday: 'Abenaa',
    Wednesday: 'Akua',
    Thursday: 'Yaa',
    Friday: 'Afua',
    Saturday: 'Ama',
};


function formValidate() {
    var date = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var gender = document.getElementsByName('gender');
    var i = 0;
    var formValid = false;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    if (date == null || date == "" || date > 31) {
        document.getElementById('errorInput').textContent = "Wrong Date";
        document.getElementById('errorInput').style.color = "white";
        return false;

    }

   
    if (month == null || month == "" || month > 12) {
        document.getElementById('errorInput').textContent = "Wrong Month";
        document.getElementById('errorInput').style.color = "white";
        return false;

    }
    
    if (year == null || year == "") {
        document.getElementById('errorInput').textContent = "Wrong year";
        document.getElementById('errorInput').style.color = "white";
        return false;

    }
    if (gender[0].checked === false && gender[1].checked === false) {
        alert("Select gender");
    } else {
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
              
                var myGender = gender[i].value;
            }
        }
    }
    var userDatails = {
        inputDate: date,
        inputMonth: month,
        inputYear: year,
        inputGender: myGender,
    }

    return userDatails;
}
function calcFunction() {

    var valid = formValidate();
    var d = valid.inputDate;
    var m = valid.inputMonth;
    var year = valid.inputYear;
    var gender = valid.inputGender;


    var a = Math.floor((14 - m) / 12);
    var y = year - a;
    var m = m + 12 * a - 2;


    var dayOfWeek = (d + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;

    var day_Week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    var the_day = day_Week[dayOfWeek];



    if (gender === "male") {
        for (var index in maleNames) {
            if (maleNames.hasOwnProperty(index)) {
                if (index === the_day) {
                    alert("Your Akan name is " + maleNames[index]);
                }
            }
        }
    } else if (gender === "female") {
        for (var index in femaleNames) {
            if (femaleNames.hasOwnProperty(index)) {
                if (index === the_day) {
                    alert("Your Akan name is " + femaleNames[index]);
                }
            }
        }
    }



}