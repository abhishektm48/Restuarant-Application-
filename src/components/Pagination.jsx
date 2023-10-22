import React from 'react'

const Pagination = (props) =>
{
    let pageLength = props.filteredData.length/props.itemsPerPage;
    let pageNumber = [];

    for(let i= 1; i<= Math.ceil(pageLength); i++)
    {
        pageNumber.push(i);
    }

    //Page onclick function

    const showItemsPerPage = (e) =>
    {
        let eachPage = e.target.id;
        props.setCurrentPage(eachPage)
    }

    let pages = pageNumber.map((item) =>
    {
        return <li id={item} onClick={showItemsPerPage} className='p-2 border border-green-600 mr-2 cursor-pointer rounded-sm font-semibold hover:bg-green-600 duration-300'>{item}</li>
    })
    
  return (
    <div className="w-44 md:w-fit mt-6">
        <ul className='flex'>
            {pages}
        </ul>
    </div>
  )
}

export default Pagination;