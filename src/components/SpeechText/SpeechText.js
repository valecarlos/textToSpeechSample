import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import './speechText.css'

export class SpeechText extends Component {
  state= {
    value: '',
    listening: false
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSpeechInput = () => {
    const currentLang = this.props.i18n.language
    if (this.state.listening === false){
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      this.setState({
        listening: true
      })
      var recognition = new SpeechRecognition();
      recognition.lang = currentLang;
      recognition.start();

      recognition.onresult = (event) => {
        this.setState({
          value: event.results[0][0].transcript
        })
        
      }

      recognition.onspeechend = () => {
        recognition.stop();
        this.setState({
          listening: false
        })
      }
    }
  }
  render() {
    return (
      <div className="textarea-holder">
        <svg className={this.state.listening ? 'listening': ''} onClick={this.handleSpeechInput} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"/></svg>
        <textarea rows="7" name="textarea" value={this.state.value} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default withTranslation()(SpeechText);
