/*  
    @author : Balusupati Deepak
    @namespace : aims.iith.ac.in
    @description : to automatically fill the feedback form 
    @other_details : This script selects "Agree(A)" checkbox for all questions and remarks will be = "Excellent" 
*/
console.clear();
function automate_feedback()
{
    document.getElementById("fbRemarks").value = "Excellent"

    total_elements = 20;
    var txt = "elementValue_";

    for(i=1; i<=total_elements; i++)
    {
        var el_name = txt + String(i);
        var elem_check = document.getElementsByName(el_name);
        elem_check[1].checked = true;
    }
    document.getElementById("savefb").click();
}
automate_feedback();
