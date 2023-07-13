//TODO: Add a submit button and figure out how to store the input. Then redirect to a confirmation page.

const test = document.getElementsByClassName("tab");
for (const tabNode of test){
    let form;
    for (const child of tabNode.children){
        if (child.id === "formStyle"){
            form = child;
        }
    }
    for (const child of tabNode.children){
        if (child.id === "textButton"){
            //wrapped in anonymous function because otherwise the return value of toggleShow is assigned. This way, it just runs toggleShow
            child.addEventListener("click", function(){
                toggleShow(form);
            });
        }
    }
}


function toggleShow(form){
    const isOn = window.getComputedStyle(form).display === "block";
    if (isOn){
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}





