

var ufoColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes" ,"comments"];

//**************************************
//**************************************
function create_table(data, columns) {
    var table = d3.select('#table-append').append('table').attr("class", "table table-bordered table-hover");
    var thead = table.append('thead');
    var tbody = table.append('tbody');

    // append the header row 
    thead.append('tr')
      .selectAll('th')
      .data(columns).enter()
      .append('th')
        .text(function (column) { return column.charAt(0).toUpperCase() + column.substr(1);
         });

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
      .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return {column: column, value: row[column]};
        });
      })
      .enter()
      .append('td')
        .text(function (d) { return d.value; });

  return table;
}

// render the table
create_table(data, ufoColumns);



//**************************************
//**************************************
function onDateChange(event) {
  var dateVar = event.target.value;
  var filterDateFormatted = "";

  // Do the search for the rows with the selected date
  if (dateVar != null && dateVar != '') {
    // Convert date value to string format in table
    // 2010-01-01 to 1/1/2010
    var date_pieces = dateVar.split('-');

    if (date_pieces[1].substring(0, 1) == "0") {
      // remove the leading zero for month
      var monthVar = date_pieces[1].substring(1, 2);
    } else {
      monthVar = date_pieces[1];
    }

    if (date_pieces[2].substring(0, 1) == "0") {
      // remove the leading zero for day
      var dayVar = date_pieces[2].substring(1, 2);
    } else {
      dayVar = date_pieces[2];
    }

    filterDateFormatted = monthVar + "/" + dayVar + "/" + date_pieces[0];
  }

  // Remove rows that don't match the date value
  var rows = document.getElementsByClassName("table")[0].tBodies[0].rows;

  if (filterDateFormatted !== "") { 
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].cells[0].innerText != filterDateFormatted) {
        // Set display to none
        rows[i].style.display = "none";
      } else {
        // Display again
        rows[i].removeAttribute("style");
      }
    }
  } else {
    for (var i = 0; i < rows.length; i++) {
      // Display all again
      rows[i].removeAttribute("style");
    }
  }
  // Reset other filters
  document.getElementById("state-input").value="";
  document.getElementById("shape-input").value="";
  document.getElementById("country-input").value="";
};


//**************************************
//**************************************
function onStateChange(event) {
  var selection = event.target.value;

  // Remove rows that don't match the date value
  var rows = document.getElementsByClassName("table")[0].tBodies[0].rows;

  if (selection !== "") { 
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].cells[2].innerText.toUpperCase() != selection) {
        // Set display to none
        rows[i].style.display = "none";
      } else {
        // Display again
        rows[i].removeAttribute("style");
      }
    }
  } else {
    for (var i = 0; i < rows.length; i++) {
      // Display all again
      rows[i].removeAttribute("style");
    }
  }

  // Reset other filters
  document.getElementById("date-input").value="";
  document.getElementById("shape-input").value="";
  document.getElementById("country-input").value="";
};


//**************************************
//**************************************
function onShapeChange(event) {
  var selection = event.target.value;

  // Remove rows that don't match the date value
  var rows = document.getElementsByClassName("table")[0].tBodies[0].rows;

  if (selection !== "") { 
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].cells[4].innerText != selection) {
        // Set display to none
        rows[i].style.display = "none";
      } else {
        // Display again
        rows[i].removeAttribute("style");
      }
    }
  } else {
    for (var i = 0; i < rows.length; i++) {
      // Display all again
      rows[i].removeAttribute("style");
    }
  }
  // Reset other filters
  document.getElementById("date-input").value="";
  document.getElementById("state-input").value="";
  document.getElementById("country-input").value="";
};


//**************************************
//**************************************
function onCountryChange(event) {
  var selection = event.target.value;

  // Remove rows that don't match the date value
  var rows = document.getElementsByClassName("table")[0].tBodies[0].rows;

  if (selection !== "") { 
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].cells[3].innerText.toUpperCase() != selection) {
        // Set display to none
        rows[i].style.display = "none";
      } else {
        // Display again
        rows[i].removeAttribute("style");
      }
    }
  } else {
    for (var i = 0; i < rows.length; i++) {
      // Display all again
      rows[i].removeAttribute("style");
    }
  }
  // Reset other filters
  document.getElementById("date-input").value="";
  document.getElementById("shape-input").value="";
  document.getElementById("state-input").value="";
};

