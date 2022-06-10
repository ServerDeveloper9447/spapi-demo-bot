module.exports = {
	name: 'lengthen',
    code: `
$onlyif[$message!=;Provide a URL for lengthening]
$title[1;Lengthen URL]
$description[1;
	$jsonrequest[$getvar[v1]/misc/lengthen?url=$message;lengthened]
]
$suppresserrors[API is down]
$colors[1;2f3136]
`
}