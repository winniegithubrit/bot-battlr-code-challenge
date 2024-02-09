import React from "react";
import BotCollection from "./BotCollection";
// import "../componentCSS/BotCollectionList.css";

function BotContainerList({ bots, handleBotclick }) {
  // console.log(bots)
  const displayBots = bots.map(bot => {
    console.log(bot)
    return (
      <BotCollection
        key={bot.id}
        id={bot.id}
        name={bot.name}
        avatar_url={bot.avatar_url}
        health={bot.health}
        damage={bot.damage}
        armor={bot.armor}
        bot_class={bot.bot_class}
        catchphrase={bot.catchphrase}
        created_at={bot.created_at}
        updated_at={bot.updated_at}
      />
    );

  })
  return (
    <div>
      {displayBots}

    </div>
    // <div className="botCollection" onClick={(e) => handleBotclick(e)}>
    //   {bots.map((bot) => (
    //     <BotCollection
    //       key={bot.id}
    //       name={bot.name}
    //       health={bot.health}
    //       damage={bot.damage}
    //       armor={bot.armor}
    //       bot_class={bot.bot_class}
    //       catchphrase={bot.catchphrase}
    //       avatar_url={bot.avatar_url}
    //       created_at={bot.created_at}
    //       updated_at={bot.updated_at}
    //     />
    //   ))}
    //</div>
  );
}

export default BotContainerList;
