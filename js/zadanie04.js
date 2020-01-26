//1

let sample_class = document.getElementsByClassName("sample_class");

function getTagsOfElements(elements) {
    let tags = [];
    for(let i = 0; i < elements.length; i++) {
        tags.push(elements[i].tagName);
    }
    return tags;
}
console.log(getTagsOfElements(sample_class));

//2

let sid = document.getElementById("sample_id");

console.log(sid.classList);

function getClassesofElements(element) {
    let array = [];

    for (let i=0; i< element.length; i++) {
        array.push(element[i]);
    }
    return array;
}
console.log(getClassesofElements(sid.classList));

//3

let sample_calss_2 = document.querySelectorAll(".sample_class_2 li");

function getTextsOfElements(elements) {
    let texts = [];
    elements.forEach(element => {
        texts.push(element.textContent);
    });

    return texts;
}

console.log(getTextsOfElements(sample_calss_2));

//4

let a = document.querySelectorAll("a");

function getAddressesOfElements(elements) {
    let address = [];
    elements.forEach(element => {
        address.push(element.getAttribute("href"));
    });

    return address;
}

console.log(getAddressesOfElements(a));

//5

let sampleClass3children = document.getElementsByClassName("sample_class_3")[0].children;
console.log(getTagsOfElements(sampleClass3children));
