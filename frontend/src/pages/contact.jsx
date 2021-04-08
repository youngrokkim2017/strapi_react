import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
    <div>
      <h2 className="font-normal text-4xl leading-tight mb-8 text-center">Contact us</h2>
      <div className="w-1/2 mx-auto">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mnqokooe"
          method="POST"
          className="sans-serif"
        >
          <div className="required mb-8">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input type="text" name="name" className="mt-1 border-black text-black placeholder-gray-600 block w-full border py-2 px-3 focus-within:border-blue-600 focus:outline-none rounded" required />
          </div>
          <div className="required mb-8">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" name="_replyto" className="mt-1 border-black text-black placeholder-gray-600 block w-full border py-2 px-3 focus-within:border-blue-600 focus:outline-none rounded" placeholder="you@example.com" required />
          </div>
          <div className="mb-8">
              <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
              <input type="text" name="subject" className="mt-1 border-black text-black placeholder-gray-600 block w-full border py-2 px-3 focus-within:border-blue-600 focus:outline-none rounded" />
          </div>
          <div className="required mb-12">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <div class="mt-1">
                  <textarea id="message" name="message" rows="4" class="mt-1 border-black text-black placeholder-gray-600 block w-full border py-2 px-3 focus-within:border-blue-600 focus:outline-none rounded" required></textarea>
              </div>
          </div>
          {status === "SUCCESS" ? <p>Thanks!</p> : <button className="inline-block px-4 py-2 leading-none text-white bg-black flex-shrink-0 cursor-pointer rounded">Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    </div>
    );
  }
}

export default MyForm;