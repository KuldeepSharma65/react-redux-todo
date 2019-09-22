import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            newItem: ' '
        }
            this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e){
        this.setState({
            newItem: e.target.value
        })
    }

     render () {
        return (
             <div>
                 <input type="text" value={this.state.newItem} onChange={this.handleChange}/>

                 <button onClick={()=>{
                     this.props.add(this.state.newItem)
                     this.setState({ newItem: ' ',})


                 }}>ADD</button>

                 <ul>
                     { this.props.list.map((item, index) =>

                         <li>
                             {item}
                             <button onClick={()=>{this.props.remove(index)}}>
                              X
                             </button>
                         </li>
                     )}
                 </ul>
             </div>
         )
     }

}

function mapStateToProps(state, ownProps) {

    return  {
        list: state.list
    }
}

function mapDispatchToProps(dispatch) {

    return  {
        add: (value) =>{
            dispatch({type: 'ADD', payload: value })
        },
        remove: (index) =>{
            dispatch({type: 'REMOVE', payload: index})
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(List)