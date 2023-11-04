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
        return <li id={item} onClick={showItemsPerPage} className='p-2 text-white border border-yellow-400 mr-4 cursor-pointer rounded-sm font-semibold hover:bg-yellow-400 duration-300 hover:text-black'>{item}</li>
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