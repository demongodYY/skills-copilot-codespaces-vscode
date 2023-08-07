function skillsMember(){
    var name = "John";
    var age = 25;
    var skills = ["JavaScript", "HTML", "CSS"];
    var isMarried = false;
    var calculateNumbers = function(var1, var2){
        return var1 + var2;
    }
    return {
        name,
        age,
        skills,
        isMarried,
        calculateNumbers
    }
}