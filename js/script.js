
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

