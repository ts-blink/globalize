(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["ca"] = $.extend(true, {}, invariant, {
        name: "ca",
        englishName: "Catalan",
        nativeName: "català",
        language: "ca",
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
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: [["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],["dg.","dl.","dt.","dc.","dj.","dv.","ds."],["dg","dl","dt","dc","dj","dv","ds"]],
                months: [["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre",""],["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des",""]],
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy",
                    f: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy HH:mm",
                    F: "dddd, d\u0027 / \u0027MMMM\u0027 / \u0027yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM\u0027 / \u0027yyyy"
                }
            })
        }
    }, cultures["ca"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);