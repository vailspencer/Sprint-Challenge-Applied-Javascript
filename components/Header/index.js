// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
    //Create HTML Framework
    const theHeader = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    //Add Text for header 
    date.textContent = 'MARCH 28, 2019'
    title.textContent = 'Lambda Times'
    temp.textContent = '98°'

    //Add CSS Classes
    theHeader.classList.add('header')
    date.classList.add('date')
    title.classList.add('h1')
    temp.classList.add('temp')

    // Attach date, title and temp to header
    theHeader.appendChild(date)
    theHeader.appendChild(title)
    theHeader.appendChild(temp)

    return theHeader
}

// Add Header to page
const headAnchor = document.querySelector('.header-container')
let theHeader = Header();

headAnchor.appendChild(theHeader)
