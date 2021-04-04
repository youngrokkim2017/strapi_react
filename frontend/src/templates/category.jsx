import React, { useState, useEffect } from 'react'
import Strapi from 'strapi-sdk-javascript/build/main'
import { Link } from "react-router-dom"
// import ReactMarkdown from "react-markdown"

const strapi = new Strapi('http://localhost:1337');

const CategoryTemplate = () => {

//   const [category, setCategory] = useState([]);
//   const [authors, setAuthors] = useState([]);

    const category = strapi.getEntries('category');
    const authors = strapi.getEntries('authors');

//   useEffect(() => {
//     const categoryData = strapi.getEntries('category');
//     const authorsData = strapi.getEntries('authors');
//     setCategory({ categoryData });
//     setAuthors({ authorsData });
//   })

  function handleDate(e) {
    var d = new Date(e);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString(undefined, options)
  }

//   const sortedByDate = data.strapiCategory.articles.sort((a, b) => {
//     let aDate = parseInt(a.published_at.split("T")[0].split("-").join(""))
//     let bDate = parseInt(b.published_at.split("T")[0].split("-").join(""))
//     return (bDate - aDate)
//   })

  const sortedByDate = category;

  const [list, setList] = useState([...sortedByDate.slice(0, 10)])
  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)
  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(sortedByDate.length > 10)
  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }
  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < sortedByDate.length
      const nextResults = isMore
        ? sortedByDate.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line
  //Check if there is more
  useEffect(() => {
    const isMore = list.length < sortedByDate.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
    <>
      <div className="px-4 sm:px-6 xl:px-6 mx-auto">
        <h2 className="font-normal mb-8 pb-2 text-4xl leading-tight border-b border-black">{category.title}</h2>
        <ul className="mb-12">

          {list.map(document => (
            <li key={document.id} className="mt-6 pb-6 border-b" style={{ borderBottomColor: '#e2e2e2' }}>
              <div className="flex items-start">
                <div className="mr-6 flex-grow">
                  <Link to={`/article/${document.title.split(/[\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_‘{|}~]+/).map((a) => a.toLowerCase()).join("-")}`}>
                    <h2 className="font-medium mb-2 text-2xl leading-none">{document.title}</h2>
                  </Link>
                  <p className='my-2'>
                    {/* {handleDate(document.published_at)} */}
                    {handleDate(document.created_at)}
                  </p>
                  {authors.map(author => (
                    <p className='mb-2 text-base' key={author.id}>
                      {author.id.split("_")[1] === document.author ?
                        <>
                          By <Link
                            className="font-medium underline"
                            to={`/author/${author.name.split(" ").map((a) => a.toLowerCase()).join("-")}`}
                          >
                            {author.name}
                          </Link>
                        </>
                        :
                        ""
                      }
                    </p>
                  ))}
                </div>
                {/* {document.image ?
                  <div>
                    <img src={document.image.publicURL} style={{ maxWidth: '200px' }} alt="" />
                  </div>
                  :
                  ""
                } */}
              </div>
            </li>
          ))}

        </ul>
        {hasMore ? (
          <button onClick={handleLoadMore} className="sans-serif inline-block px-4 py-2 leading-none text-white bg-black flex-shrink-0 cursor-pointer rounded">Load More</button>
        ) : (
            <p>No more results</p>
          )}
      </div>
    </>
  )
}

export default CategoryTemplate;