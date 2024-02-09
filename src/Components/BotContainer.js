import BotContainerList from './BotContainerList'

function BotContainer({bots}) {
  return (
    <div className='homepage'>
      <BotContainerList bots = {bots}/>
    </div>
  )
}

export default BotContainer
