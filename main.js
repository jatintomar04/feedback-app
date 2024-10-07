let form = document.querySelector ("form");
let select = document.querySelector ('select');
let textarea = document.querySelector ('textarea');
let ul = document.querySelector ('ul');

const saveFeedback = (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let delBtn = document.createElement('button');

    h1.innerText = "rating : " + select.value;
    p.innerText = "review : " +  textarea.value;
    delBtn.innerText = 'delete';
    delBtn.className = "btn btn-danger float-end";
    li.className = "list-group-item rounded-0";
    li.appendChild(h1);
    li.appendChild(p);
    li.appendChild(delBtn);
   

    ul.appendChild(li)

     form.reset();
};

form.addEventListener("submit" , saveFeedback);

const removeReview = (e) => {
    if (e.target.className.includes("btn-danger")) {
        let li = e.target.parentElement;
    ul.removeChild(li);
}
};

ul.addEventListener("click" , removeReview);


  