//your code here!

// Function to add items to the list
function addItemsToList(start, end) {
  const list = document.getElementById('infi-list');
  for (let i = start; i <= end; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${i}`;
    list.appendChild(listItem);
  }
}

// Function to check if the user has scrolled to the bottom of the page
function isBottomOfPage() {
  const list = document.getElementById('infi-list');
  const lastItem = list.lastElementChild;
  const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
  const pageOffset = window.pageYOffset + window.innerHeight;
  return pageOffset > lastItemOffset;
}

// Function to handle scroll events and load more items when reaching the bottom
window.addEventListener('scroll', function() {
  if (isBottomOfPage()) {
    const list = document.getElementById('infi-list');
    const itemCount = list.children.length;
    addItemsToList(itemCount + 1, itemCount + 10); // Add 10 more items
  }
});

// Initial load: Add some items to the list
addItemsToList(1, 20); // Add initial 20 items
