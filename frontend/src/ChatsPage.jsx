import  {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='faed2df2-d371-4c43-b03b-5e912c538c32'
        username= {props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
  )
}

export default ChatsPage