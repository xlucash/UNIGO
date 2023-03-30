"use client";
// import data from "test-data/cities.json";

function List(props) {
  const filterSearches = props.data.filter((search) => {
    if (props.searchName === "") {
      return search;
    } else {
      return search.name.toLowerCase().includes(props.searchName);
    }
  });

  const GiveButtonValue = (e) => {
    e.preventDefault();
    e.target.closest("ul").previousSibling.value = e.target.value;
    console.log(e.target.closest("ul").previousSibling);
    console.log(e.target.closest("ul").previousSibling.value);
    
    props.removeList();
  };

  return (
    <>
      {props.focus && (
        <ul className="h-auto bg-slate-300 ">
          {filterSearches.map((search) => (
            <li className="p-1.5" key={search.id}>
              <button onClick={GiveButtonValue} value={search.name}>
                {search.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default List;
