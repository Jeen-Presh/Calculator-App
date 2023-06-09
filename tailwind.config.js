const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      T1bgmain: " #3A4663",
      T1bgkeypad: "#242D44",
      T1bgscreen: "#181F33",
      T1bgskey: "#EAE3DC",
      T1keyshadow: "#B3A497",
      T1bgredkey: "#181F33",
      T1redkeyShadow: "#181F33",
      T1bgredkeytoggle: "#181F33",
      T1bgkey2: "#647198",
      T1key2shadow: "#414E73",
      T1textgray: "#434A59",
      T1textwhite: "#FFFFFF",

      T2bgmain: "#E6E6E6",
      T2bgkeypad: "#D2CDCD",
      T2bgscreen: "#EEEEEE",
      T2bgskey: "#E5E4E1",
      T2keyshadow: "#A79E91",
      T2bgorangekey: "#C85402",
      T2orangekeyShadow: "#873901",
      T2bgorangekeytoggle: "#873901",
      T2bgkey2: "#378187",
      T2key2shadow: "#1B6066",
      T2textgray: "#36362C",
      T2textwhite: "#FFFFFF",

      T3bgmain: "#17062A",
      T3bgkeypad: "#1E0936",
      T3bgscreen: "#1E0936",
      T3bgskey: "#331C4D",
      T3keyshadow: "#881C9E",
      T3bcyankey: "#00DED0",
      T3cyanShadow: "#6CF9F1",
      T3bgorangekeytoggle: "#00DED0",
      T3bgkey2: "#56077C",
      T3key2shadow: "#BE15F4",
      T3textyellow: "#FFE53D",
      T3textblue: "#FFE53D",
      T3textwhite: "#FFFFFF",
    },

    fontSize: {
      xs: ["0.75rem", { lineHeight: "11px", letterSpacing: "1px " }],

      sm: ["1.25rem", { lineHeight: "18px", letterSpacing: "-0.333333px" }],

      lg: ["2rem", { lineHeight: "29px", letterSpacing: "-0.533333px" }],

      xl: ["2.5rem", { lineHeight: "37px", letterSpacing: "-0.666667px" }],

      "2xl": ["3.5rem", { lineHeight: "52px", letterSpacing: "-0.933333px" }],

      "2sm": ["1.75rem", { lineHeight: "26px", letterSpacing: "-0.466667px" }],
    },
    
    extend: {
      fontFamily: {
        sparta: "'League Spartan' , sans-serif",
      },
    },
  },
  plugins: [],
};
