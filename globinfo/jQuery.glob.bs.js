(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["bs"] = $.extend(true, {}, invariant, {
        name: "bs",
        englishName: "Bosnian",
        nativeName: "bosanski",
        language: "bs",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "KM"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],["ned","pon","uto","sri","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["bs"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);