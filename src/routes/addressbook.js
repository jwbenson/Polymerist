function init(app) {
	app.get('/addressbook', index);
}

function index(req, res, next) {
	var id = req.query.id;

	if (contacts[id]) {
		res.send(contacts[id]);
	}
	else {
		res.send(contacts[0]);
	}
}

var contacts = [
	{
		"Name": "Avye Mills",
		"Address": "6750 Metus. Road",
		"Company":"Egestas Limited",
		"Phone": "1-571-662-8794"
	},
	{
		"Name": "Nero Velez",
		"Address": "6347 Aliquet, Rd.",
		"Company":"Tristique Pharetra Company",
		"Phone": "1-409-209-2229"
	},
	{
		"Name": "Ella Beasley",
		"Address": "2224 Posuere Street",
		"Company":"Arcu Sed Incorporated",
		"Phone": "1-543-780-1299"
	},
	{
		"Name": "Lucian Harvey",
		"Address": "Ap #226-7008 Ullamcorper Rd.",
		"Company":"Tortor At Risus LLP",
		"Phone": "1-564-971-1510"
	},
	{
		"Name": "Rashad Nunez",
		"Address": "P.O. Box 352, 6192 Dapibus Road",
		"Company":"Donec Feugiat Industries",
		"Phone": "1-647-276-2012"
	},
	{
		"Name": "Ruby Carrillo",
		"Address": "P.O. Box 892, 1938 Egestas. Ave",
		"Company":"Sapien Gravida Foundation",
		"Phone": "1-226-896-5945"
	},
	{
		"Name": "Gil Fisher",
		"Address": "P.O. Box 121, 3562 Et St.",
		"Company":"Pede Malesuada Company",
		"Phone": "1-132-374-8240"
	},
	{
		"Name": "Clayton Gray",
		"Address": "302-4586 Pede. Street",
		"Company":"Leo Incorporated",
		"Phone": "1-807-137-1700"
	},
	{
		"Name": "Cassady Lara",
		"Address": "827 Posuere Ave",
		"Company":"Purus Limited",
		"Phone": "1-217-454-8349"
	},
	{
		"Name": "Harlan Tillman",
		"Address": "P.O. Box 458, 1680 Nulla Ave",
		"Company":"Et Incorporated",
		"Phone": "1-181-693-1113"
	},
	{
		"Name": "Isaiah Zamora",
		"Address": "P.O. Box 949, 4490 Tellus. St.",
		"Company":"Urna Vivamus Molestie Limited",
		"Phone": "1-438-124-5680"
	},
	{
		"Name": "Oren Gregory",
		"Address": "Ap #949-2310 Consequat St.",
		"Company":"Lorem Fringilla Ornare Consulting",
		"Phone": "1-410-339-4128"
	},
	{
		"Name": "Katelyn Nunez",
		"Address": "3952 Senectus Rd.",
		"Company":"Et Commodo At Incorporated",
		"Phone": "1-609-118-9247"
	},
	{
		"Name": "Hayfa Hamilton",
		"Address": "804 Maecenas Ave",
		"Company":"Et Ultrices Posuere Industries",
		"Phone": "1-190-878-8225"
	},
	{
		"Name": "Ella Ellison",
		"Address": "P.O. Box 967, 7783 Aenean Ave",
		"Company":"Non Sollicitudin Institute",
		"Phone": "1-124-140-5137"
	},
	{
		"Name": "Brent Townsend",
		"Address": "9837 At, St.",
		"Company":"Eu Neque Pellentesque LLC",
		"Phone": "1-401-312-1632"
	},
	{
		"Name": "Desiree Horton",
		"Address": "Ap #302-3208 Phasellus Av.",
		"Company":"Dictum Eleifend Nunc Industries",
		"Phone": "1-607-731-1983"
	},
	{
		"Name": "Lesley Holland",
		"Address": "Ap #613-9997 Eu, Ave",
		"Company":"Elit Foundation",
		"Phone": "1-368-576-5530"
	},
	{
		"Name": "Owen Wells",
		"Address": "Ap #330-394 Ac Av.",
		"Company":"Praesent Interdum Foundation",
		"Phone": "1-157-313-6417"
	},
	{
		"Name": "Kiona Rice",
		"Address": "657 Amet Ave",
		"Company":"Porttitor Tellus Non Industries",
		"Phone": "1-763-626-7728"
	},
	{
		"Name": "Yuli Dixon",
		"Address": "5697 Donec Rd.",
		"Company":"Diam Dictum Associates",
		"Phone": "1-190-355-5165"
	},
	{
		"Name": "Eagan Carver",
		"Address": "1992 Elit. Av.",
		"Company":"Mi Aliquam Corp.",
		"Phone": "1-111-813-8638"
	},
	{
		"Name": "Hedwig Dillard",
		"Address": "P.O. Box 681, 1948 Velit Ave",
		"Company":"Ad Company",
		"Phone": "1-907-451-4070"
	},
	{
		"Name": "Evan Vaughn",
		"Address": "419-277 Id St.",
		"Company":"Ut Tincidunt Orci Corporation",
		"Phone": "1-498-951-2409"
	},
	{
		"Name": "Delilah Burton",
		"Address": "Ap #807-4639 Sociis Rd.",
		"Company":"Tellus Phasellus Elit Consulting",
		"Phone": "1-226-824-6350"
	},
	{
		"Name": "Lev Miles",
		"Address": "P.O. Box 996, 2768 Quis St.",
		"Company":"Justo Proin Non Corporation",
		"Phone": "1-461-904-7230"
	},
	{
		"Name": "Ivory Grant",
		"Address": "P.O. Box 597, 4065 Nam Rd.",
		"Company":"Ornare Facilisis Eget LLP",
		"Phone": "1-978-799-9434"
	},
	{
		"Name": "Orlando Edwards",
		"Address": "300-4601 Facilisis St.",
		"Company":"Lectus Limited",
		"Phone": "1-907-736-5993"
	},
	{
		"Name": "Linda Hogan",
		"Address": "Ap #399-3059 Vel, Street",
		"Company":"Nibh Corporation",
		"Phone": "1-522-205-7298"
	},
	{
		"Name": "Germaine Weeks",
		"Address": "P.O. Box 813, 8480 Pellentesque, Avenue",
		"Company":"Egestas Limited",
		"Phone": "1-946-926-6798"
	},
	{
		"Name": "Kato Holder",
		"Address": "372-7027 Proin St.",
		"Company":"Egestas PC",
		"Phone": "1-941-195-8543"
	},
	{
		"Name": "Justina Green",
		"Address": "484-9795 Feugiat Rd.",
		"Company":"Primis In Inc.",
		"Phone": "1-421-593-8104"
	},
	{
		"Name": "Alyssa Casey",
		"Address": "545-7249 Ante. Rd.",
		"Company":"Egestas Blandit PC",
		"Phone": "1-258-715-5651"
	},
	{
		"Name": "Karleigh Kramer",
		"Address": "410-3258 Elementum, Rd.",
		"Company":"Rhoncus Donec Corp.",
		"Phone": "1-490-288-3269"
	},
	{
		"Name": "Uriah Calderon",
		"Address": "P.O. Box 121, 2710 Vel Rd.",
		"Company":"Proin Ultrices Consulting",
		"Phone": "1-568-688-4970"
	},
	{
		"Name": "Nathaniel Langley",
		"Address": "Ap #220-5597 Euismod Ave",
		"Company":"Tellus Aenean Corp.",
		"Phone": "1-783-124-2570"
	},
	{
		"Name": "Alma Church",
		"Address": "544-5667 Et, Rd.",
		"Company":"Orci Lacus Inc.",
		"Phone": "1-814-908-0625"
	},
	{
		"Name": "Shad Manning",
		"Address": "8571 Risus. Rd.",
		"Company":"Consequat Lectus Incorporated",
		"Phone": "1-958-254-1253"
	},
	{
		"Name": "Clare Burns",
		"Address": "110-2695 Eget, St.",
		"Company":"Adipiscing Elit Company",
		"Phone": "1-468-543-0214"
	},
	{
		"Name": "Noble Bailey",
		"Address": "537-2978 Non Road",
		"Company":"Arcu Et Pede Industries",
		"Phone": "1-244-119-0303"
	},
	{
		"Name": "Harriet Lang",
		"Address": "Ap #697-4964 Mollis. Av.",
		"Company":"Aliquam Limited",
		"Phone": "1-408-207-7345"
	},
	{
		"Name": "Justin Newman",
		"Address": "P.O. Box 247, 9456 Sit Street",
		"Company":"At Libero Corporation",
		"Phone": "1-797-202-9746"
	},
	{
		"Name": "Phelan Whitehead",
		"Address": "Ap #895-3301 Suscipit St.",
		"Company":"Mollis Lectus Pede LLP",
		"Phone": "1-752-207-7120"
	},
	{
		"Name": "MacKenzie Swanson",
		"Address": "6721 Consectetuer Road",
		"Company":"Nostra Per Inceptos Inc.",
		"Phone": "1-259-781-9206"
	},
	{
		"Name": "Kalia Brock",
		"Address": "6323 Praesent Avenue",
		"Company":"Sit Amet LLP",
		"Phone": "1-968-257-7398"
	},
	{
		"Name": "Lara Ochoa",
		"Address": "Ap #352-4411 Metus Ave",
		"Company":"Orci Institute",
		"Phone": "1-113-722-0687"
	},
	{
		"Name": "Noble Bird",
		"Address": "8259 Cursus Avenue",
		"Company":"Fusce Mollis Duis Associates",
		"Phone": "1-751-448-7661"
	},
	{
		"Name": "Amy Nieves",
		"Address": "P.O. Box 909, 9966 Sociis Avenue",
		"Company":"Malesuada Augue Foundation",
		"Phone": "1-129-820-5317"
	},
	{
		"Name": "Katell Mcconnell",
		"Address": "2539 Magna, Road",
		"Company":"In Consequat Enim Ltd",
		"Phone": "1-178-954-0275"
	},
	{
		"Name": "Ivan James",
		"Address": "4657 Augue Rd.",
		"Company":"Ultrices Associates",
		"Phone": "1-480-495-9439"
	},
	{
		"Name": "Beau Contreras",
		"Address": "837-2421 Nulla Rd.",
		"Company":"Ultrices Vivamus Rhoncus LLP",
		"Phone": "1-687-849-0991"
	},
	{
		"Name": "Ria Harper",
		"Address": "282-6019 Proin St.",
		"Company":"A Sollicitudin Ltd",
		"Phone": "1-267-287-5225"
	},
	{
		"Name": "Elton Guy",
		"Address": "Ap #749-6598 Vitae St.",
		"Company":"Dolor Egestas Rhoncus Inc.",
		"Phone": "1-558-868-2928"
	},
	{
		"Name": "Malachi Douglas",
		"Address": "6712 Integer Road",
		"Company":"At Auctor Ullamcorper LLC",
		"Phone": "1-824-765-0020"
	},
	{
		"Name": "Ayanna Marsh",
		"Address": "204-1591 Magnis Rd.",
		"Company":"Urna LLC",
		"Phone": "1-631-296-5099"
	},
	{
		"Name": "Aurelia Douglas",
		"Address": "P.O. Box 801, 3448 Dignissim St.",
		"Company":"Et Eros Corporation",
		"Phone": "1-910-541-3253"
	},
	{
		"Name": "Alfonso Vega",
		"Address": "Ap #775-8884 Mauris Avenue",
		"Company":"Morbi Accumsan Laoreet LLP",
		"Phone": "1-563-392-7239"
	},
	{
		"Name": "Maxine Mendez",
		"Address": "495-9247 Nunc Street",
		"Company":"Parturient Montes Limited",
		"Phone": "1-207-971-0168"
	},
	{
		"Name": "Bryar House",
		"Address": "393-4938 Pellentesque St.",
		"Company":"Accumsan PC",
		"Phone": "1-495-899-9190"
	},
	{
		"Name": "Hall Henry",
		"Address": "1394 Risus. Rd.",
		"Company":"Dignissim Maecenas Industries",
		"Phone": "1-397-125-1844"
	},
	{
		"Name": "Xyla Wynn",
		"Address": "121-6516 Et, St.",
		"Company":"Nunc Ltd",
		"Phone": "1-937-594-8875"
	},
	{
		"Name": "Florence Simpson",
		"Address": "5653 Pede. St.",
		"Company":"Amet LLP",
		"Phone": "1-532-443-1938"
	},
	{
		"Name": "Tobias Barton",
		"Address": "Ap #807-3197 Neque. Av.",
		"Company":"Scelerisque Neque Sed Institute",
		"Phone": "1-549-700-8620"
	},
	{
		"Name": "Emerald Mueller",
		"Address": "198-8141 Convallis, Rd.",
		"Company":"Laoreet Ipsum Institute",
		"Phone": "1-974-993-6399"
	},
	{
		"Name": "Remedios Hester",
		"Address": "6289 Semper Avenue",
		"Company":"Duis Elementum Dui Corp.",
		"Phone": "1-834-884-7162"
	},
	{
		"Name": "Brandon Page",
		"Address": "P.O. Box 284, 7378 Dictum Road",
		"Company":"Et LLC",
		"Phone": "1-908-231-7805"
	},
	{
		"Name": "Florence Barrera",
		"Address": "Ap #574-9049 Nunc Av.",
		"Company":"Non Ltd",
		"Phone": "1-397-417-4796"
	},
	{
		"Name": "Camille Gillespie",
		"Address": "391-3570 Ullamcorper, Avenue",
		"Company":"Auctor Quis Corporation",
		"Phone": "1-753-610-4540"
	},
	{
		"Name": "Kimberley Pierce",
		"Address": "307-7604 Lorem Rd.",
		"Company":"Ridiculus Mus Proin Foundation",
		"Phone": "1-569-750-4182"
	},
	{
		"Name": "Yoshio Collins",
		"Address": "8883 Gravida Street",
		"Company":"Ridiculus Mus Proin LLC",
		"Phone": "1-955-685-6680"
	},
	{
		"Name": "Dakota Holder",
		"Address": "900-8944 Magna. Av.",
		"Company":"Rutrum LLP",
		"Phone": "1-340-977-2646"
	},
	{
		"Name": "Nathaniel Casey",
		"Address": "P.O. Box 430, 6070 Cursus Rd.",
		"Company":"Quis Limited",
		"Phone": "1-690-981-5978"
	},
	{
		"Name": "Shannon King",
		"Address": "6686 Aenean Rd.",
		"Company":"Conubia Nostra Associates",
		"Phone": "1-355-775-9405"
	},
	{
		"Name": "Timon Figueroa",
		"Address": "Ap #721-8731 Facilisis, Road",
		"Company":"Nulla Dignissim Maecenas Industries",
		"Phone": "1-590-665-1527"
	},
	{
		"Name": "Alexa Hill",
		"Address": "2615 Ut Rd.",
		"Company":"Mauris Associates",
		"Phone": "1-717-303-4310"
	},
	{
		"Name": "Mary Barnett",
		"Address": "899-4855 Suspendisse Road",
		"Company":"Tristique Ac Corporation",
		"Phone": "1-676-959-7221"
	},
	{
		"Name": "Echo Stout",
		"Address": "137-5982 Vehicula. Rd.",
		"Company":"Nunc Mauris PC",
		"Phone": "1-884-738-3696"
	},
	{
		"Name": "Lewis Cote",
		"Address": "P.O. Box 108, 5660 Vitae, Rd.",
		"Company":"Senectus Associates",
		"Phone": "1-842-495-7078"
	},
	{
		"Name": "Fiona Fisher",
		"Address": "P.O. Box 870, 9955 Conubia Street",
		"Company":"Pretium Associates",
		"Phone": "1-564-895-2820"
	},
	{
		"Name": "Doris Puckett",
		"Address": "Ap #918-201 Fusce Street",
		"Company":"Vitae Odio Sagittis Industries",
		"Phone": "1-485-663-4003"
	},
	{
		"Name": "Rigel Lamb",
		"Address": "P.O. Box 963, 8549 Hendrerit Ave",
		"Company":"Euismod Ac Fermentum Ltd",
		"Phone": "1-326-150-9883"
	},
	{
		"Name": "September Castaneda",
		"Address": "Ap #414-8433 Euismod Road",
		"Company":"Venenatis A Magna Foundation",
		"Phone": "1-207-879-4211"
	},
	{
		"Name": "Sean Berg",
		"Address": "Ap #779-9714 Tempor Rd.",
		"Company":"Nibh Lacinia Orci Ltd",
		"Phone": "1-187-129-3670"
	},
	{
		"Name": "Cairo Carrillo",
		"Address": "560-9768 Adipiscing St.",
		"Company":"Tincidunt Limited",
		"Phone": "1-982-829-3443"
	},
	{
		"Name": "Cailin Medina",
		"Address": "401-755 Dictum Rd.",
		"Company":"Mi Fringilla Mi Corp.",
		"Phone": "1-512-560-1106"
	},
	{
		"Name": "Dieter Cooper",
		"Address": "P.O. Box 911, 1741 Amet, Ave",
		"Company":"Risus Industries",
		"Phone": "1-640-994-9711"
	},
	{
		"Name": "Gretchen Guerrero",
		"Address": "Ap #372-8610 Adipiscing Road",
		"Company":"Gravida LLP",
		"Phone": "1-229-808-7320"
	},
	{
		"Name": "Rowan Sanchez",
		"Address": "8721 Lacus. Rd.",
		"Company":"Neque Nullam Associates",
		"Phone": "1-702-308-0361"
	},
	{
		"Name": "Mercedes Bowers",
		"Address": "Ap #646-198 Justo Road",
		"Company":"Congue In Scelerisque LLC",
		"Phone": "1-144-805-1542"
	},
	{
		"Name": "Dorothy Lewis",
		"Address": "Ap #164-9571 Elementum Ave",
		"Company":"Maecenas Mi Felis Corporation",
		"Phone": "1-642-356-1766"
	},
	{
		"Name": "Madaline Salazar",
		"Address": "Ap #705-4820 Montes, Ave",
		"Company":"Est Tempor Bibendum Company",
		"Phone": "1-510-823-4323"
	},
	{
		"Name": "Kibo Flowers",
		"Address": "1326 Tempor, Street",
		"Company":"Dapibus PC",
		"Phone": "1-587-528-5199"
	},
	{
		"Name": "Darryl Crane",
		"Address": "P.O. Box 116, 7333 Aliquam St.",
		"Company":"Dis Parturient Montes Limited",
		"Phone": "1-582-358-9381"
	},
	{
		"Name": "Linda Cox",
		"Address": "P.O. Box 838, 5445 Lectus, Avenue",
		"Company":"Non Incorporated",
		"Phone": "1-315-124-1062"
	},
	{
		"Name": "Emily Santiago",
		"Address": "700-7771 Donec Avenue",
		"Company":"Arcu Imperdiet Ullamcorper Corporation",
		"Phone": "1-885-606-7545"
	},
	{
		"Name": "Gareth Andrews",
		"Address": "198-1048 Dolor Av.",
		"Company":"Sodales Inc.",
		"Phone": "1-215-442-0627"
	},
	{
		"Name": "Barrett Malone",
		"Address": "Ap #900-4241 Eu Avenue",
		"Company":"Fringilla Donec PC",
		"Phone": "1-954-727-8869"
	},
	{
		"Name": "Hilel Ware",
		"Address": "390-757 Malesuada St.",
		"Company":"Nec PC",
		"Phone": "1-704-421-1042"
	},
	{
		"Name": "Garrison Kirkland",
		"Address": "P.O. Box 495, 4803 Lectus, Road",
		"Company":"Cursus Integer Mollis Consulting",
		"Phone": "1-515-522-6290"
	},
	{
		"Name": "Abraham Shepard",
		"Address": "Ap #278-3364 Mauris Road",
		"Company":"Lobortis Quam A Industries",
		"Phone": "1-218-353-1521"
	}
]

exports.init = init;