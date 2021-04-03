import React from "react"
import Strapi from 'strapi-sdk-javascript/build/main'
import ReactMarkdown from "react-markdown"

const strapi = new Strapi('http://localhost:1337');

class AboutUsTemplate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        try {
            const data = await strapi.getEntries('posts')
            this.setState({ data });
        } 
        catch(err) {
            alert(err);
        }
    }

    render() {
        let data = this.state.data;

        return (
            <div>
                <h2 className="font-normal mb-8 text-4xl leading-tight">{data.title}</h2>
                  <div className="flex-grow flex-shrink-0 prose tracking-normal text-black max-w-full">
                    <ReactMarkdown source={data.content} />
                </div>
            </div>
        )
    }
}

export default AboutUsTemplate;