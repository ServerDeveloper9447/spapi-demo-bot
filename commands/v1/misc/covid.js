module.exports = {
name: 'covidcountry',
code: `
$onlyif[$message!=;Please provide a country name]
$suppresserrors[API IS HAVING A STROKE !!1!!1!!!!1!1!!]
$title[1;COVID-19 Country Info]
$addfield[1;Cases;
Total: [$getobjectproperty[cases.total]]
Deaths: [$getobjectproperty[cases.deaths]]
Recovered: [$getobjectproperty[cases.recovered]]
Tests: [$getobjectproperty[cases.tests]
Active: [$getobjectproperty[cases.active]]
Critical: [$getobjectproperty[cases.critical]]

**Today**
Cases: [$getobjectproperty[cases.today.cases]]
Deaths: [$getobjectproperty[cases.today.deaths]]
Recovered: [$getobjectproperty[cases.today.recovered]]
]
$addfield[1;Country Info;
ID: $getobjectproperty[countryinfo.id]
ISO2: $getobjectproperty[countryinfo.iso2]
ISO3: $getobjectproperty[countryinfo.iso3]
Latitude: $getobjectproperty[countryinfo.latitude]
Longitude: $getobjectproperty[countryinfo.longitude]
Population: [$getobjectproperty[countryinfo.population]]
Continent: $getobjectproperty[countryinfo.continent]
]
$addfield[1;Updated;<t:$getobjectproperty[updated]>;true]
$addfield[1;Country;$getobjectproperty[country];true]
$createobject[$jsonrequest[$getvar[v1]/misc/covidcountry?country=$message]]
$color[1;2f3136]
`
}