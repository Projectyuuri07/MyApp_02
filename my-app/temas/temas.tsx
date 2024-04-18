import { useColorScheme } from 'react-native'


interface cores {
    /* Backgrounds */
    bgPrimary: string
    bgSecondary: string
    bginfo: string
    textColorPrimary: string
    textColorSecondary: string
    bgPatrimonio: string

    /* Input */
    bgPrimaryVariant?: string
    textColorPrimaryVariant: string
    bgHover: string

    /* Button */
    bgButton?: string
}


const light: cores = {
    bgPrimary: '#ffffff',
    bgSecondary: '#FF0000',
    bginfo: '#011E83',
    textColorPrimary: '#101010',
    textColorSecondary: '#ffffff',
    bgPatrimonio: '#ffffff',
    /* Input */
    bgPrimaryVariant: '#F5F5F5',
    textColorPrimaryVariant: '#595959',
    bgHover: '#F39200',
    /* Button */ 
    bgButton: '#101010'
}

const dark: cores = {
    bgPrimary: '#240707',
    bgSecondary: '#240707',
    textColorPrimary: '#ffffff',
    textColorSecondary: '##D9D9D9',
    bginfo: '#ffffff',
    bgPatrimonio: '#FF0000',
    /* Input */
    bgPrimaryVariant: '#3A2828',
    textColorPrimaryVariant: '#CBCBCB',
    bgHover: '#F39200',
    /* Button */
    bgButton: '#FF0000' 
}


export function useColor(){
    const ColorScheme = useColorScheme()
    if (ColorScheme ==  'dark') { return dark } 
    else { return light }
}