// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


// Tab HTML framework, class and text

const createTab = (tabData) =>{

    const topic = document.createElement('div');

    topic.classList.add('tab');
    topic.textContent = tabData;

    return topic;
}

// Grab API for data 
const tabHook = document.querySelector('.topics');
const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')

axiosPromise.then((response) => {

    //Add data from API to topics tabs 
    const topicArray = response.data.topics;
        topicArray.forEach((item) =>{
            const newTab =createTab(item);
            tabHook.appendChild(newTab);
        })
});


