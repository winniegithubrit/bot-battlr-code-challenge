import BotCollection from "./BotCollection"

function BotContainerList({ id, name, avatar_url,health,damage,armor,bot_class,catchphrase, updated_at,created_at }) {
  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="botCollection">
      <p>{id}</p>
      <p>name: {name}</p>
      <img src={avatar_url} />
      <p>health: {health}</p>
      <p>damage: {damage}</p>
      <p>armor: {armor}</p>
      <p>bot_class: {bot_class}</p>
      <p>catchphrase: {catchphrase}</p>
      <p>updated_at: {updated_at}</p>
      <p>created_at: {created_at}</p>
    </div>
  );
}
export default BotContainerList