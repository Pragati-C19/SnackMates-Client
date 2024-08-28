// Search bar component

 // query for search bar this will reflect in header again 
 const [query, setQuery] = useState("");

 filteredList = rows.filter((item) => {
   return item.title.toLowerCase().includes(query.toLowerCase());
 });