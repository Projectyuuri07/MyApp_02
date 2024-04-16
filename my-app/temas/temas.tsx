import { useColorScheme } from 'react-native'


interface cores {
    bgPrimary: string
    bgSecondary: string
    bginfo?: string
    textColorPrimary: string
    textColorSecondary: string
}


const light: cores = {
    bgPrimary: '#ffffff',
    bgSecondary: '#FF0000',
    bginfo: '#011E83',
    textColorPrimary: '#000000',
    textColorSecondary: '#ffffff'
}

const dark: cores = {
    bgPrimary: '#240707',
    bgSecondary: '#FF0000',
    textColorPrimary: '#ffffff',
    textColorSecondary: '#D9D9D9'
}


export function useColor(){
    const ColorScheme = useColorScheme()
    if (ColorScheme ==  'dark') { return dark } 
    else { return light }
}