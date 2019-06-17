import React from 'react';
import TextSpeech from './components/TextSpeech';
import { withTranslation } from 'react-i18next';
import LocaleSwitch from './components/LocaleSwitch';
import SpeechText from './components/SpeechText/SpeechText';

function MyTitle({ t }){
  return (
    <>
      <div>
        <TextSpeech message={`${t('Welcome')}, ${t('Message')}`}/>
        <h2>{t('Welcome')}</h2>
      </div>
      <p>{t('Message')}</p>
    </>)
}
const Title = withTranslation()(MyTitle)

function MyTasks({ t }){
  const tasks = [
    {
      title: t('harvesting title'),
      body: t('harvesting task 1')
    },
    {
      title: t('seeding title'),
      body: t('seeding task 1')
    },
    {
      title: t('irrigation title'),
      body: t('irrigation task 1')
    }
  ]
  return (
    <ul>
      {tasks.map((task, index) => {
        return (<Task key={index} task={task}/>)
      })}
    </ul>
  )
}
const Tasks = withTranslation()(MyTasks)

function Task({task}){
  return(
    <li className="task">
      <TextSpeech message={`${task.title}, ${task.body}`}/>
      <h4>{task.title}</h4>
      <p>{task.body}</p>
    </li>
  )
}

function MySubtitle({ t }){
  return (
    <>
      <div>
        <TextSpeech message={`${t('Add notes')}`}/>
        <h2>{t('Add notes')}</h2>
      </div>
    </>)
}
const Subtitle = withTranslation()(MySubtitle)

function App() {
  return (
    <div>
      <LocaleSwitch/>
      <Title/>
      <Tasks />
      <Subtitle />
      <SpeechText />
    </div>
  );
}

export default App;
