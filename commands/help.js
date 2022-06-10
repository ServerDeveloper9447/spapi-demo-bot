module.exports = {
	name: 'help',
    code: `
$title[1;Help Desk]
$color[1;2f3136]
$description[1;**Every endpoint url after the base and the section is the command name.**
Example: In the endpoint url section if it is written **BASE URL/fun/8ball** then the **\`8ball\`** will be the command name. ***We don't mind typing the command in case-insensitive***.
The bot isn't ready yet so a large amount of commands aren't added. 
Join our **[Discord Server](https://discord.gg/VqA92g8)** to stay updated.]
$addfield[1;V1 Commands;
All endpoints can be found [here.](https://wiki.spapiwiki.ga)
;false]
$addfield[1;V2 Commands;
All endpoints can be found [here.](https://wiki2.spapiwiki.ga)
]
$addfield[1;Info;
**[SP-API Official Site](https://www.spapi.ga)**
**[Developer](https://duck.is-a.dev)**
**[SP-API Bundle NPM](https://npmjs.com/spapi-bundle)**
]
$footer[1;Requested by $usertag]
$thumbnail[1;$useravatar[$clientid]]
`
}