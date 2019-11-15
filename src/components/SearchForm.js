import React, { useState } from "react";

export default function SearchForm() {
 const [searchForm, setSearchForm]= useState('');

  // const handleFormChange=(event) => {
  //   setSearchForm({
  //     ...searchForm,
  //     [event.target.name]:event.target.value
  //   })
  // };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchForm(searchForm=event.target.value)
    console.log(searchForm);


    event.persist();
    console.log(event);
  };
 
  return (
    <section className="search-form">
    < form onSubmit={handleSubmit}>
      <input 
      type="text"
      name="name"
      id="name"
      placeholder="Search"
      // onChange={handleFormChange}
      value={searchForm.name}
      />
      <button type="Submit">Search</button>
    </form>
    </section>
  );
}
