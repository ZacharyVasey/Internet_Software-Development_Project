 function loadStates() {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            	var obj = eval(this.responseText);
            	var x = document.getElementById("stateList");
            	
                for (i = 0; i < obj.length; i++) {
                	  var option = document.createElement("option");
                	  option.value = obj[i].stateCode;
                	  option.text = obj[i].stateName;
                	  x.append(option);
                    }

            }
        };
        xmlhttp.open("GET","../php/loadStates.php",true);
        xmlhttp.send();
}





