import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState(" ")  


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

    const matchingName = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

    const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true
    return item.category === selectedCategory
  })

  // const itemsToDisplay = items.filter((item) => {
  //   if (item.name.toLowerCase().includes(search.toLowerCase())) {
  //     return item.name
  //   }
  //   else if (selectedCategory === "All") {
  //     return true
  //   };
  //   else {
  //     return item.category === selectedCategory}
  //   });
  

  // // added an if statement
  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All"){
  //     if (item.name === search){ // added the if statement here
  //       return item.name && item.category}
  //       else {
  //         return true
  //       }
  //     }
  //   return item.category === selectedCategory
  // })

// // this needs to be compare item.name to search, and to update search to item.name[n]
//   const matchingName = items.filter((item) => {
//     if (item.name === search){
//       return true
//     } else {
//       return item.name}
//   })

// // maybe write a for loop that iterates over each letter in search 
// for (i = 0; i < item.name; i++){

// }

// // modified itemsToDisplay
//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All"){
//       return true
//     }
//     else if (search === (item.name)) {
//       console.log(item.name)
//       return item.name && item.category
//     } else {
//       return item.category === selectedCategory; 
//     }
//     // return item.category === selectedCategory; 
//   });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
