function sortTable(sortColumn){
    console.log("sort")
    var tableData = document.getElementsByTagName('tbody').item(0);
    var rowData = tableData.getElementsByTagName('tr');            
    for(var i = 0; i < rowData.length - 1; i++){
        for(var j = 0; j < rowData.length - (i + 1); j++){
	    var val1 = rowData.item(j).getElementsByTagName('td').item(sortColumn).innerHTML;
	    var val2 = rowData.item(j+1).getElementsByTagName('td').item(sortColumn).innerHTML;
	    console.log(val1);
	    console.log(val2);
	    if(val1 < val2){
                console.log("if");
		tableData.insertBefore(rowData.item(j+1),rowData.item(j));
            }
        }
    }
}

function addSorting() {
	HTMLCollection.prototype.forEach = Array.prototype.forEach;
	var elems = document.getElementsByTagName("th");
	elems.forEach(function(e, i, a) {
		console.log(a[i]);
		a[i].onclick=function(){sortTable(i);};
	});
}

window.onload = addSorting;
