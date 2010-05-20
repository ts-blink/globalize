(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["syr"] = $.extend(true, {}, invariant, {
        name: "syr",
        englishName: "Syriac",
        nativeName: "ܣܘܪܝܝܐ",
        language: "syr",
        isRTL: true,
        numberFormat: {
            currency: {
                pattern: ["$n-","$ n"],
                symbol: "ل.س.‏"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 6,
                days: [["ܚܕ ܒܫܒܐ","ܬܪܝܢ ܒܫܒܐ","ܬܠܬܐ ܒܫܒܐ","ܐܪܒܥܐ ܒܫܒܐ","ܚܡܫܐ ܒܫܒܐ","ܥܪܘܒܬܐ","ܫܒܬܐ"],["܏ܐ ܏ܒܫ","܏ܒ ܏ܒܫ","܏ܓ ܏ܒܫ","܏ܕ ܏ܒܫ","܏ܗ ܏ܒܫ","܏ܥܪܘܒ","܏ܫܒ"],["ܐ","ܒ","ܓ","ܕ","ܗ","ܥ","ܫ"]],
                months: [["ܟܢܘܢ ܐܚܪܝ","ܫܒܛ","ܐܕܪ","ܢܝܣܢ","ܐܝܪ","ܚܙܝܪܢ","ܬܡܘܙ","ܐܒ","ܐܝܠܘܠ","ܬܫܪܝ ܩܕܝܡ","ܬܫܪܝ ܐܚܪܝ","ܟܢܘܢ ܩܕܝܡ",""],["܏ܟܢ ܏ܒ","ܫܒܛ","ܐܕܪ","ܢܝܣܢ","ܐܝܪ","ܚܙܝܪܢ","ܬܡܘܙ","ܐܒ","ܐܝܠܘܠ","܏ܬܫ ܏ܐ","܏ܬܫ ܏ܒ","܏ܟܢ ܏ܐ",""]],
                AM: ["ܩ.ܛ","ܩ.ܛ","ܩ.ܛ"],
                PM: ["ܒ.ܛ","ܒ.ܛ","ܒ.ܛ"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dd MMMM, yyyy",
                    t: "hh:mm tt",
                    T: "hh:mm:ss tt",
                    f: "dd MMMM, yyyy hh:mm tt",
                    F: "dd MMMM, yyyy hh:mm:ss tt",
                    M: "dd MMMM",
                    Y: "MMMM, yyyy"
                }
            })
        }
    }, cultures["syr"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);