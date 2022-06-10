module.exports = {
name: '$alwaysExecute',
code: `
$djseval[
require('cleverbot-free')("$message").then(r => {
msg.channel.send(r)
})
]
$bottyping
$suppresserrors
$onlyforchannels[959827805082877964;]
$onlyforservers[596545236499693570;]
`
}