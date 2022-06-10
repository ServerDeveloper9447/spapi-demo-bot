module.exports = {
	name: 'mock',
    code: `
$onlyif[$message!=;Please provide text to mock.]
$suppresserrors[API is probably having a stroke]
$title[1;Mock Text]
$description[1;
Mocked: **$jsonrequest[$getvar[v1]/misc/mock?text=$message;mocked]**
]
$color[1;2f3136]
`
}