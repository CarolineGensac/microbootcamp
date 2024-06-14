const catsFolder = [
	{
		type: 'folder',
		name: 'cats',
		children: [
			{
				type: 'image',
				name: 'Buffy',
			},
			{
				type: 'image',
				name: 'Gizmo',
			},
			{
				type: 'folder',
				name: 'small-cat',
				children: [
					{
						type: 'image',
						name: 'Fluffy',
					},
					{
						type: 'image',
						name: 'Harry',
					},
					{
						type: 'folder',
						name: 'black-cat',
						children: [
							{
								type: 'image',
								name: 'Daisy',
							},
							{
								type: 'image',
								name: 'Toby',
							},
						],
					},
					{
						type: 'folder',
						name: 'white-cat',
						children: [
							{
								type: 'image',
								name: 'Minnie',
							},
							{
								type: 'image',
								name: 'Lucy',
							},
						],
					},
				],
			},
			{
				type: 'folder',
				name: 'future-cat',
				children: [],
			},
		],
	},
];

const catNamesArray = [];

function findCatNames(folder) {
	for (object of folder) {
		if (object.type === 'image') {
      console.log(object.name)
			catNamesArray.push(object.name);
		} else {
			findCatNames(object.children);
		}
	}
}

findCatNames(catsFolder);
console.log(catNamesArray);
