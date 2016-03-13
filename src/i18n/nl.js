	(function (jsGrid) {

		jsGrid.locales.nl = {
			grid: {
				noDataContent: "Geen data gevonden",
				deleteConfirm: "Weet je het zeker?",
				pagerFormat: "Pagina: {first} {prev} {pages} {next} {last} &nbsp;&nbsp; {pageIndex} van {pageCount}",
				pagePrevText: "Vorige",
				pageNextText: "Volgende",
				pageFirstText: "Eerste",
				pageLastText: "Laatste",
				loadMessage: "Even geduld alstublieft...",
				invalidMessage: "Ongeldige gegevens!"
			},

			loadIndicator: {
				message: "Laden..."
			},

			fields: {
				control: {
					searchModeButtonTooltip: "Zoekopdracht wijzigen",
					insertModeButtonTooltip: "Invoegen veranderen",
					editButtonTooltip: "Aanpassen",
					deleteButtonTooltip: "Verwijderen",
					searchButtonTooltip: "Zoeken",
					clearFilterButtonTooltip: "Filter wissen",
					insertButtonTooltip: "Invoegen",
					updateButtonTooltip: "Wijzigen",
					cancelEditButtonTooltip: "Aanpassen annuleren"
				}
			},

			validators: {
				required: { message: "Verplicht veld" },
				rangeLength: { message: "De ingegeven waarde valt buiten het bereik" },
				minLength: { message: "De ingegeven waarde is te lang" },
				maxLength: { message: "De ingegeven waarde is te kort" },
				pattern: { message: "De waarde valt niet in het opgegeven patroon" },
				range: { message: "De waarde valt buiten het bereik" },
				min: { message: "De ingegeven waarde is te hoog" },
				max: { message: "De ingegeven waarde is te laag" }
			}
		};

	}(jsGrid, jQuery));
