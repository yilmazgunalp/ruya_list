import React from 'react';
import ActionBox from './action_box.js'
import Enter from './enter.js'
import Chiper from './chiper.js'
import Success from './success.js'
import Failure from './failure.js'
import CrazeHeader from './crazeHeader.js'
import ListItem from './listItem.js'
import Addbutton from './addButton.js'
import DotsBox from './dotsBox.js'
import InputItem from './InputItem.js'
    //<ActionBox header="Welcome to Ruya's List" action={() => <Enter/>}/>
    //<Failure message={failmessage}/>
const failmessage = 'The water cycle consists of three phenomena – evaporation, precipitation, and collection- which are the three phenomena that make up what is known as “the water cycle.” ... These clouds are formed by a phenomenon known as “evaporation,” which is the first of three phenomena that make up the water cycle...'
function Entrance() {
  return (
    <div>
    <CrazeHeader title="Things Ruya will do"/>
    <ListItem order="1" todo="something"/>
    <ActionBox header="Say friend and enter!" action={() => <Chiper count="6"/>}/>
    <Addbutton title="Only Ruya can click here!"/>
    <DotsBox/>
    <InputItem placeholder="something to do"/>
    </div>
  )
}

export default Entrance;
