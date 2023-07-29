const nativewind = require("nativewind/tailwind/css");

module.exports = {
    
    content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./app/screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blackapp': '#171717',
                'redapp': '#9E1E4C',
                'pinkapp': '#FF1168',
                'purpleapp':'#9645E7',
                'grayapp': '#8F8F8F',
                'whiteapp':'#ECECEC',
                    },
        },
    },
    plugins: [],
};