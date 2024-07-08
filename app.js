console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");





class Book {
  constructor(id, title, author, read = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;

  }
}


class Library {
  constructor(bookCount, booksArray = []) {
    this.bookCount = bookCount;
    this.booksArray = booksArray;
  }

  markRead(checkbox, id) {
    for (let i = 0; i < this.booksArray.length; i++) {
      if (id == this.id) {
        this.read = true;
        checkBoxCheck = true;
      }
    }

  }

  addBook(newList) {
    
    const newRow = document.createElement("tr");
    const newTitle = document.createElement("td");
    const newAuthor= document.createElement("td");
    const checkBox = document.createElement("input")
    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.classList.add("edit-button");
    // const editButton = document.querySelector(".edit-button")
    // editButton.style.display = "inline-block"
    checkBox.type = ["checkbox"];
    checkBox.disabled = true;
    const tableBody = document.querySelector(".tableBody");
    
    
    newTitle.textContent = newList.title;
    newAuthor.textContent = newList.author;
    checkBox.checked = newList.read;
    
    newRow.append(newTitle);
    newRow.append(newAuthor);
    newRow.append(checkBox);
    newRow.append(editButton);
    tableBody.append(newRow);
    
  }
  
  editBook() {

    const editButton = document.querySelector(".edit-button");
    const modalPopup = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");

    editButton.addEventListener("click", (event) => {
      event.preventDefault();

      console.log("Hello");
      modalPopup.append(modalContent);
      document.body.append(modalPopup);


    })
  }

}

function listNewBook() {
  let count = 0;
  const submitButton = document.querySelector(".btn");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    var x = document.forms["frm"]["title-form"].value;
    var y = document.forms["frm"]["author-form"].value;
    
    if (x == "" || y == "") {
      alert("Input must be filled out");
      return false;
    } else {
      const title = document.querySelector("#title-form");
      const author = document.querySelector("#author-form");
      const read = document.querySelector("#if-read");
      let bookId = Math.floor(Math.random() * 50);
    
      count++;
    
      const newBook = new Book(bookId, title.value, author.value, read.checked);
  
      title.value = "";
      author.value = "";
      read.checked = false;

      const newListOfBooks = new Library(count, [newBook]);
      
      console.log(newListOfBooks);
      newListOfBooks.addBook(newBook);
      newListOfBooks.editBook(newBook);
    }       
  });
}


listNewBook();








// const submitButton = document.querySelector(".btn");

    // submitButton.addEventListener("click", (event) => {

    //   event.preventDefault();

    //   const bookTitle = document.querySelector("#title-form");
    //   const bookAuthor = document.querySelector("#author-form");
    //   const bookRead = document.querySelector("#if-read");
    //   const tableBody = document.querySelector("tbody");

    //   const newBook = new Book(1, bookTitle.value, bookAuthor.value, bookRead.value);

    //   // this.booksArray.push(newBook);

    //   console.log(newBook)

    //   // const newRow = document.createElement("tr")
    //   // const checkBox = document.createElement("input")
    //   // checkBox.type = "checkbox"
    //   // const newData = document.createElement("td")
    //   // const authorData = document.createElement("td")
    //   // const checkBoxData = document.createElement("td")
    
    //   // checkBox.checked = newBook.read;
    
    //   // newData.textContent = newBook.title;
    //   // authorData.textContent = newBook.author;
    //   // newRow.append(newData)
    //   // newRow.append(authorData)
    //   // tableBody.append(newRow)
    //   // newRow.append(checkBoxData)
    //   // checkBoxData.append(checkBox)
      

      
    // })