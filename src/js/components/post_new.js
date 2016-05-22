import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';

//import the action creator to pass to handleSubmit helper from redux-form
import {createPost} from '../actions/index';

class PostsNew extends Component {

  constructor(props) {
    super(props);
  }
  componentWillMount = () => {

  }

  render = () => {
    // redux-form injects several different helpers as can check by logging this.props
    // here we pull the one to handle the form submition
    // and the one the fields object containing the field we mapped to the bottom when connecting the form to redux
    //the below is equivalent to const handleSubmit = this.props.handleSubmit and
    // this.props.fields.title, this.props.fields.categories and this.props.fields.content
    // but we use ES6 destructuring to condense everything into one line
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    // we pass all the fields helpers to each field again using ES6 destructuring, thus:
    // {...title}, {...categories} and {...content} on the respective field
    // we delegate responsibility for the inputs as well as the submit button totally to redux-form

    //with handleSubmit(this.props.createPost) we give the responsibility for submiting the form to redux-form
    //by passing the action creator createPost, this action creator is available from this.props

    //console.log(this.props);
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title"
            className={`form-control ${title.touched && title.invalid ? 'form-error is-visible' : ''}`}
            {...title} />
          <p className="help-text">
          { /*touched is a property from redux form that returns true until the input is modified somehow
            we use this to only show the error message once the user has interacted with the form
            */
          }
            {title.touched ? title.error : ''}
          </p>
        </div>

        <div>
          <label htmlFor="categories">Categories</label>
          <input type="text" name="categories"
            className={`form-control ${categories.touched && categories.invalid ? 'form-error is-visible' : ''}`}
            {...categories} />
          <p className="help-text">
            {title.touched ? categories.error : ''}
          </p>
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea name="content"
            className={`form-control ${content.touched && content.invalid ? 'form-error is-visible' : ''}`}
            {...content} />
          <p className="help-text">
            {title.touched ? content.error : ''}
          </p>
        </div>

        <button type="submit">Save</button>
        <Link to="/" className="alert button">Cancel</Link>
      </form>
    );
  }
}

//here we add validation to the form using redux-form
function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a username';
  }
  if(!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }
   return errors;
}

//connect: 1st argment is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st argument is form config, 2nd is mapStateToProps and 3rd is mapDispatchToProps

//what the means is that we can use redux-form to connect to redux an create a container component

// here we tell redux-form about the configuration of our form, i.e.
// which fields it contains and what they are called and wire it to redux:
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate //we connect redux-form validate helper to our local function
}, null, {createPost})(PostsNew);

// when user types something in...record it on application state like so:
// state === {
//   form: {
//     PostsNewForm: { // or whatever given name for the form (as above)
//       title: '...',  //whatever the user has typed
//       categories: '...', //whatever the user has typed
//       content: '...' //whatever the user has typed
//     }
//   }
// }
