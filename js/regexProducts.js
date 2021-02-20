$(document).ready(function() {
    
    //$("#add_item_button").submit(provjera);

    regexProducts();
   
});

function regexProducts(){
    
    var entry_title = $("#add_item_title").val();
    var entry_price = $("#add_item_price").val();
    var entry_category = $("#add_item_category > select > option:checked").val();
    var entry_brand = $("#add_item_brand > select > option:checked").val();
    var entry_description = $("#add_item_description").val();
    var entry_picture = $("#add_pic").val();

    console.log(entry_picture)

    var regTitle = /^[A-Z][a-z]{2,12}(\s[-])*(\s[A-Z][a-z]{2,12})*(\s[-])*(\s[-])*(\s[A-Z][a-z]{2,12})*$/;
    var regPrice = /^[1-9][0-9]*$/;
    var regPic = /^.*\.(jpg|jpeg|png)$/;

    //Regex front test
    if(!regTitle.test(entry_title)){
        console.log(entry_title);
        $("#add_item_title").css({"border": "1px solid red"});
        return false;
    }
    if(!regPrice.test(entry_price)){
        console.log("ne valja");
        $("#add_item_price").css({"border": "1px solid red"});
        return false;
    }
    if(entry_category == 0){
        console.log("ne valja kat");
        $("#add_item_category select").css({"border": "1px solid red"});
        return false;
    }
    if(entry_brand == 0){
        console.log("ne valja brend");
        $("#add_item_brand select").css({"border": "1px solid red"});
        return false;
    }
    if(entry_description == " "){
        console.log("ne valja brend");
        $("#add_item_description").css({"border": "1px solid red"});
        return false;
    }
    if(!regPic.test(entry_picture)){
        console.log(entry_picture);
        $("#add_pic").css({"border": "1px solid red"});
        return false;
    }

    return true;
}