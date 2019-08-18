
    function validateForm() {
        var date = document.getElementById('day');
        var month = document.getElementById('month');
        var year = document.getElementById('year');
        var gender = document.getElementsByName('gender');
    
    
        //validating the form inputs
        if (date.value > 31 || date.value == null || date.value == "") {
            document.getElementById('errorInput').innerHTML = "Wrong Date";
            document.getElementById('errorInput').style.color = "red";
            return false;
        }
        if(month.value > 12 || month.value == null || month.value == ""){
            document.getElementById('errorInput').innerHTML = "Wrong Month";
            document.getElementById('errorInput').style.color = "red";
            return false;
        }
        if(year.value == null || year.value == ""){
            document.getElementById('errorInput').innerHTML = "Invalid Year";
            document.getElementById('errorInput').style.color = "red";
            return false;
        }
        for(var i=0; i<gender.length; i++){
            if(gender[i].checked){
                var userGender = gender[i].value;
                alert(userGender);
            }else{
                alert(" Gender Not selected")
            }
            var userInput = {
                date : userDate,
                month: userMonth,
                year: userYear,
                gender: userGender
            };
            return userInput;
    
        }
        function allFunction(){
            validateForm();
        };
        function userDetails(){
            var usrDetails = validateForm;
            dateInput = userInput.date;
            monthInput = userInput.month;
            yearInput = userInput.year;
            genderInput = userInput.gender;
            
            
            alert(dateInput);
        }


