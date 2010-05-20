(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["cs-CZ"] = $.extend(true, {}, invariant, {
        name: "cs-CZ",
        englishName: "Czech (Czech Republic)",
        nativeName: "čeština (Česká republika)",
        language: "cs",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "Kč"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],["ne","po","út","st","čt","pá","so"],["ne","po","út","st","čt","pá","so"]],
                months: [["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                monthsGenitive: [["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince",""],["1","2","3","4","5","6","7","8","9","10","11","12",""]],
                AM: ["dop.","dop.","DOP."],
                PM: ["odp.","odp.","ODP."],
                eras: [{"name":"n. l.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["cs-CZ"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);