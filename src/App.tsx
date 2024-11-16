import { useState } from 'react'
import { Avatar } from './components/Avatar'
import Button from './components/Button'
import Drawer from './components/Drawer'
import Input from './components/FormInputs'
import PasswordInput from './components/FormInputs/Password'
import TextArea from './components/FormInputs/TextArea'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div style={{width:'100vw'}}>
      <Button variant='primary' size='sm' onClick={toggle}>
        Open Drawer
      </Button>
      <div>
        <Avatar size='xl' isOnline  src='https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </div>
      <Input value='' label='Name' size='xl' onChange={() => {}} placeholder='hello' name='name' />
      <TextArea value='' label='Name' size='xl' onChange={() => {}} placeholder='hello' name='name' />
      <PasswordInput value='' label='Password' size='sm' onChange={() => {}} name='password' />
      <Drawer isOpen={isOpen} closeDrawer={toggle}>
        <h1>Drawer</h1>
      </Drawer>
    </div>
  )
}

export default App
