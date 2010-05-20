(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["af"] = $.extend(true, {}, invariant, {
        name: "af",
        englishName: "Afrikaans",
        nativeName: "Afrikaans",
        language: "af",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currency: {
                pattern: ["$-n","$ n"],
                symbol: "R"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                days: [["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],["Son","Maan","Dins","Woen","Dond","Vry","Sat"],["So","Ma","Di","Wo","Do","Vr","Sa"]],
                months: [["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember",""],["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des",""]],
                patterns: {
                    d: "yyyy/MM/dd",
                    D: "dd MMMM yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM yyyy hh:mm tt",
                    F: "dd MMMM yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["af"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);