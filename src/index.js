import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Grid, Col} from 'react-bootstrap'
import styles from './main.css';

class Calculate extends React.Component{
  constructor(){
    super();
    this.state = {
      result: '0',
      inputs: '',
      prev: ''
    }
    this.operators = ['+', '-', '*', '/'];
    this.buttonMap = [
      'AC', 'CE', '%',  '/',
       '7',  '8', '9',  '*',
       '4',  '5', '6',  '-',
       '1',  '2', '3',  '+',
       '.',  '0','ANS', '='
    ].map((val)=>{return 	<Button className={styles.btnStyle}
      bsSize='lg'
      key={val}
      onClick={()=>this.btnClick(val)}>
      <p className={styles.btnFont}>{val}</p></Button>});
  }

  btnClick(val){
    if(val === '='){
      let cal = eval(this.state.inputs);
      this.setState({
        result: cal,
        inputs: cal,
        prev: val
      });

    }
    else if(val === 'AC'){
      this.setState({
        result: '0',
        inputs: '',
        prev: val
      });
    }else if(val === 'CE'){
      if(this.state.result !=='0' && this.state.result.length !== 1){
        console.log(this.state.inputs);
        let changedInputs = this.state.inputs.toString().slice(0,-1);

        console.log('whatup');

        this.setState({
          inputs: changedInputs,
          result: changedInputs,
          prev: val
        })
      }

    }else if(val === 'ANS'){
      this.setState({
        result: inputs,
        prev: val
      });
    }
    else{
      let isMultiOperators = this.operators.includes(this.state.prev) && this.operators.includes(val);
      if(!isMultiOperators){
        let input = this.state.inputs+val;
        this.setState({
          inputs: input,
          result: input,
          prev: val
        });
      }
    }
  }

  render(){
    return(
      <div>
        <Grid>
          <div className={styles.displayBox}>
            <p className={styles.displayFont}>{this.state.result}</p>
            {this.buttonMap}
          </div>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<Calculate/>, document.getElementById('calculator'));
