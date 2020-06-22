**Update**
This bug was fixed in EDS CORE 0.3.1
Bug report => https://github.com/equinor/design-system/issues/369

**Describe the bug**
I'm using the Tab-component and having an input field inside one tab.
When updating state via onChange-handler for input, the Input-field keeps loosing focus.

Live demo of the bug: https://tabby.vercel.app/
Repo with the bug: https://github.com/SjoenH/EDS-Tab-Input-Bug

**Simple Code Example**
```JavaScript
function App() {
    const [activeTab, setActiveTab] = useState(0)
    const [inputValue, setInputValue] = useState('')

    return (
        <Tabs activeTab={activeTab} onChange={(index) => setActiveTab(index)}>
            <TabList>
                <Tab>Tab one</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
```

**Step by step**

<img width="556" alt="Screenshot 2020-06-15 at 15 18 19" src="https://user-images.githubusercontent.com/3164065/84662021-7f1ff500-af1b-11ea-9a2b-7b8ad2bcab68.png">

And then after typing "e" we can see that the input field looses its focus.

<img width="552" alt="Screenshot 2020-06-15 at 15 28 21" src="https://user-images.githubusercontent.com/3164065/84663018-e4c0b100-af1c-11ea-87fb-73bbc80e8b38.png">

So i guess the TabPanel is re-rendered and giving me some issues.

**Specifications**

- Version: 0.3.0
- Browser: Firefox & Safari 
- OS: Mac OS 10.15.4
