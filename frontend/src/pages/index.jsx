import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../components/header/header';

const strapi = new Strapi('http://localhost:1337');

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
  // adaptiveHeight: true,
};

class LandingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    try {
      const posts = await strapi.getEntries('posts')
      this.setState({ posts });
    } 
    catch(err) {
      alert(err);
    }
  }

  render() {
    let posts = this.state.posts;
    console.log(posts);

    // function handleDate(e) {
    //   var d = new Date(e);
    //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //   return d.toLocaleDateString(undefined, options)
    // }

    // const sortedByDate = data..sort((a, b) => {
    //   let aDate = parseInt(a.published_at.split("T")[0].split("-").join(""))
    //   let bDate = parseInt(b.published_at.split("T")[0].split("-").join(""))
    //   return (bDate - aDate)
    // })

    // const recentArticles = sortedByDate.slice(0, 5);
    const recentArticles = posts.slice(0, 5);

    return (
    //   <section>
    //     {this.state.posts.map(post => (
    //       <div>
    //         <div>Title: {post.title}</div>
    //         <div>Content: {post.content}</div>
    //       </div>
    //     ))}
    //   </section>
    <div className="flex flex-col min-h-screen justify-between">
      <Header data={posts} />
      <main className='container mx-auto px-4 sm:px-6 xl:px-6'>
        <div className="pb-12 mx-auto">
          <div>
            <Slider {...settings}>
              {recentArticles.map(document => (
                <div className="text-center">
                  {/* {document.image
                    ?
                    <div className="">
                      <img src={document.image.publicURL} alt="" className="m-0 p-0 text-center mx-auto mb-6 object-cover w-3xl h-96" />
                    </div>
                    :
                    ""
                  } */}
                  <h2 className="text-4xl mb-2">{document.title}</h2>
                  {/* <p>
                    {document.author.name}
                  </p> */}
                  {/* <p>
                    {handleDate(document.published_at)}
                  </p> */}
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h1 className='text-3xl font-medium pb-4 mb-4 border-b border-black leading-none'>
              Popular
          </h1>
            {/* <ul>
              {popularArticles.map(document => (
                <li key={document.id} className="mt-4 pb-4 border-b" style={{ borderBottomColor: '#e2e2e2' }}>
                  <Preview article={document} format="small" />
                </li>
              ))}
            </ul> */}
          </div>
          <div className="col-span-1 lg:col-span-2">
            <h1 className='text-3xl font-medium pb-4 mb-4 border-b border-black leading-none'>
              Latest
          </h1>
            {/* <ul>
              {recentArticles.map(document => (
                <li key={document.id} className="mt-4 pb-4 border-b" style={{ borderBottomColor: '#e2e2e2' }}>
                  <Preview article={document} format="medium" />
                </li>
              ))}
            </ul> */}
          </div>
          <div>
            <div className="mb-6">
              <h1 className='text-3xl font-medium pb-4 mb-4 border-b border-black leading-none'>
                Newsletter
              </h1>
              {/* <MailchimpComponentHome /> */}
            </div>
            <div className="">
              <h1 className='text-3xl font-medium pb-4 mb-4 border-b border-black leading-none'>
                Magazine
              </h1>
              {/* <Link to={`/magazine/${latestIssue.title.split(" ").map((a) => a.toLowerCase()).join("-")}`}>
                <img src={latestIssue.pdf.publicURL} alt="" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div>
            <h1 className='text-3xl font-medium pb-4 mb-4 border-b border-black leading-none'>
              Labscopes
          </h1>
            {/* <ul>
              {labscopesArticles.map(document => (
                <li key={document.id} className="mt-4 pb-4 border-b" style={{ borderBottomColor: '#e2e2e2' }}>
                  <Preview article={document} format="small-no-img" />
                </li>
              ))}
            </ul> */}
          </div>
          <div>
            <h1 className='text-3xl font-medium pb-4 mb-4 border-b border-black leading-none'>
              Noteworthy News
          </h1>
            {/* <ul>
              {noteworthyArticles.map(document => (
                <li key={document.id} className="mt-4 pb-4 border-b" style={{ borderBottomColor: '#e2e2e2' }}>
                  <Preview article={document} format="small-no-img" />
                </li>
              ))}
            </ul> */}
          </div>
          <div>
            <h1 className='text-3xl font-medium pb-4 mb-4 border-b border-black leading-none'>
              Climate Change
          </h1>
            {/* <ul>
              {climateChangeArticles.map(document => (
                <li key={document.id} className="mt-4 pb-4 border-b" style={{ borderBottomColor: '#e2e2e2' }}>
                  <Preview article={document} format="small-no-img" />
                </li>
              ))}
            </ul> */}
          </div>
          <div>
            <h1 className='text-3xl font-medium pb-4 mb-4 border-b border-black leading-none'>
              Life Science
          </h1>
            {/* <ul>
              {lifeScienceArticles.map(document => (
                <li key={document.id} className="mt-4 pb-4 border-b" style={{ borderBottomColor: '#e2e2e2' }}>
                  <Preview article={document} format="small-no-img" />
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
    )
  }
}

export default LandingContainer;