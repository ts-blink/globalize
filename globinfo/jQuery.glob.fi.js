(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["fi"] = $.extend(true, {}, invariant, {
        name: "fi",
        englishName: "Finnish",
        nativeName: "suomi",
        language: "fi",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],["su","ma","ti","ke","to","pe","la"],["su","ma","ti","ke","to","pe","la"]],
                months: [["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu",""],["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu",""]],
                AM: null,
                PM: null,
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM\u0027ta \u0027yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM\u0027ta \u0027yyyy H:mm",
                    F: "d. MMMM\u0027ta \u0027yyyy H:mm:ss",
                    M: "d. MMMM\u0027ta\u0027",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["fi"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);