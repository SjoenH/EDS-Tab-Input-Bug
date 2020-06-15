import {Tabs, Typography} from '@equinor/eds-core-react';
import './App.css';
import React, {useState} from 'react'
import styled from 'styled-components'

const {TabList, Tab, TabPanels, TabPanel} = Tabs

const noop = () => {
}


const Wrapper = styled.div`
  margin: 32px;
  display: grid;
  grid-gap: 24px;
`

function App() {
    const [activeTab, setActiveTab] = useState(0)
    const [inputValue, setInputValue] = useState('')

    const handleChange = (index) => {
        setActiveTab(index)
    }

    return (
        <Wrapper>
            <Typography variant="h1">Tab with panels</Typography>
            <Typography variant="body_long">
                To navigate using they keyboard, use tab key to move from tab to tab
                panel, shift + tab to go backwards, use left and right arrow keys to
                move from between tabs (active tab must be focused). Focus outline is
                only visible when navigating using the keyboard.
            </Typography>
            <Tabs activeTab={activeTab} onChange={handleChange}>
                <TabList>
                    <Tab>Tab one</Tab>
                    <Tab>Tab two</Tab>
                    <Tab disabled>Tab three</Tab>
                    <Tab>Tab four</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Typography variant={'h2'}>The problem</Typography>
                        <p>Try to input some text.</p>
                        <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/> {'<- Using setState'}
                        <p>We are only able to input one letter at a time...because the tab-bar graps the focus after each keypress.</p>
                        <p>Though, we don't experience the same issue if we are not updating the state.</p>
                        <input type="text"/> {'<- No state'}
                    </TabPanel>
                    <TabPanel>Panel two</TabPanel>
                    <TabPanel>Panel three</TabPanel>
                    <TabPanel>Panel four</TabPanel>
                </TabPanels>
            </Tabs>
        </Wrapper>
    )
}
export default App;
