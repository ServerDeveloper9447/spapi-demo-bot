module.exports = {
	name: "genpass",
    code: `
$title[1;Password Generate]
$description[1;
Password: **$jsonrequest[https://apiv1.spapi.ga/misc/genpass;password]**
]
$color[1;2f3136]
$suppresserrors[API maybe down]
`
}