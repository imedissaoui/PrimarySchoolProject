/*import React from 'react';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import deco from './Gestion.modules.css';
import Flip from 'react-reveal/Flip';

class GestionEleve extends React.Component {
  constructor(props) {
    super(props);
    this.groupProps = {
      appear: false,
      enter: true,
      exit: true,
    };
    this.state={
      todo: '',
      todos: [
        ' حمزة عبد الباقي    ',
        'عماد عيساوي',
        'أحمد حفصي',
      ].map( (text, id) => ({ id, text }) ),
    };
    this.state.id = this.state.todos.length;
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }
  add(event) {
    event.preventDefault();
    this.setState({
      id: this.state.id + 1,
      todos: [
        ...this.state.todos,
        { id: this.state.id, text: this.state.todo || '-' }
      ],
      todo: '',
    });
  }
  remove(event) {
    this.setState({ todos: this.state.todos.filter( item =>
      item.id !== +event.currentTarget.getAttribute('data-id')
    )});

  }
  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }
  render() {
    return (
    <div className={deco.gestion}>
    
    

    <select name="classe" className={deco.option}>
        <option value="">--الرجاء تحديد خيار--</option>
        <option value=" classe1"> القسم1</option>
        <option value="classe2"> 2القسم</option>
       
    </select>
    
    <label className={deco.choix}>    &nbsp;&nbsp;&nbsp;  &nbsp; : قم بإختيار القسم   </label>
    <Flip left duration={1500}>
    <h1 className={deco.liste}>قائمة التلاميذ</h1>
    </Flip>
      <form onSubmit={this.add} autoComplete="off">
        <div className={deco.col}>
          <TransitionGroup {...this.groupProps}>
            {this.state.todos.map( (item) =>
              // The next line is what controls
              // animated transitions
              <Fade key={item.id} collapse bottom>
                <div className={deco.card}>
                  <div className={deco.card_body}>
                    {item.text}
                    <button
                
                      data-id={item.id}
                      onClick={this.remove}
                      type="button"
                      className={deco.close}
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </Fade>
            )}
          </TransitionGroup>
        </div>
        <div className={deco.col-10}>
          <div className="input-group mt-4 mb-1">
            <input
              type="text"
              className={deco.form_control}
              id='todoField'
              placeholder='                                                                                                                                                                                                                               تحديث'
              name='todo'
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                onClick={this.add}
                className="btn btn-outline-success"
                type="button"
              >
              إضافة
              </button>
            </div>
          </div>
          <small id="emailHelp" className={deco.form_text} >
          {this.state.todos.length}  : عدد التلاميذ
          </small>
        </div>
      </form>
      </div>
    );
  }
}

export default GestionEleve;
 */
import React from 'react';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import './Gestion.css';
import Flip from 'react-reveal/Flip';

class GestionEleve extends React.Component {
  constructor(props) {
    super(props);
    this.groupProps = {
      appear: false,
      enter: true,
      exit: true,
    };
    this.state={
      todo: '',
      todos: [
        ' حمزة عبد الباقي    ',
        'عماد عيساوي',
        'أحمد حفصي',
      ].map( (text, id) => ({ id, text }) ),
    };
    this.state.id = this.state.todos.length;
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }
  add(event) {
    event.preventDefault();
    this.setState({
      id: this.state.id + 1,
      todos: [
        ...this.state.todos,
        { id: this.state.id, text: this.state.todo || '-' }
      ],
      todo: '',
    });
  }
  remove(event) {
    this.setState({ todos: this.state.todos.filter( item =>
      item.id !== +event.currentTarget.getAttribute('data-id')
    )});

  }
  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }
  render() {
    return (
    <div className="gestion">  
    <select name="classe" className="option">
        <option value="">--الرجاء تحديد خيار--</option>
        <option value=" classe1"> القسم1</option>
        <option value="classe2"> 2القسم</option>
       
    </select>
    
    <label className="choix">    &nbsp;&nbsp;&nbsp;  &nbsp; : قم بإختيار القسم   </label>
    <Flip left duration={1500}>
    <h1 className="liste">قائمة التلاميذ</h1>
    </Flip>
      <form onSubmit={this.add} autoComplete="off">
        <div className="col11">
          <TransitionGroup {...this.groupProps}>
            {this.state.todos.map( (item) =>
              // The next line is what controls
              // animated transitions
              <Fade key={item.id} collapse bottom>
                <div className="card10">
                  <div className="card-body justify-content-between">
                    {item.text}
                    <button
                
                      data-id={item.id}
                      onClick={this.remove}
                      type="button"
                      className="close10"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </Fade>
            )}
          </TransitionGroup>
        </div>
        <div className="col-10 col12 ">
          <div className="input-group mt-4 mb-1">
            <input
              type="text"
              className="form-control"
              id='todoField'
              placeholder='                                                                                                                                                                                                                               تحديث'
              name='todo'
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                onClick={this.add}
                className="btn11 btn-outline-success"
                type="button"
              >
              إضافة
              </button>
            </div>
          </div>
          <small id="emailHelp" className="form-text text-muted">
          {this.state.todos.length}  : عدد التلاميذ
          </small>
        </div>
      </form>
      </div>
    );
  }
}

export default GestionEleve;
 