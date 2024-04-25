import { useColorScheme } from 'react-native'


interface cores {
    /* Backgrounds */
    bgPrimary: string
    bgSecondary: string
    bgTertiary: string
    bgQuaternary: string
    bgPatrimonio: string
    bginfo: string
    textColorPrimary: string
    textColorSecondary: string
    bglistaPrimary: string

    /* Input */
    bgPrimaryVariant: string
    textColorPrimaryVariant: string
    bgHover: string

    /* Button */
    bgButton?: string
}


const light: cores = {
    /* Backgrounds */
    bgPrimary: '#FFFFFF',
    bgSecondary: '#FF0000',
    bgTertiary: '#011E83',
    bgQuaternary: '#101010',
    bgPatrimonio: '#FF0000',
    bglistaPrimary: '#ffffff',

    /* Texto */
    bginfo: '#011E83',
    textColorPrimary: '#101010',
    textColorSecondary: '#FFFFFF',

    /* Input */
    bgPrimaryVariant: '#F5F5F5',
    textColorPrimaryVariant: '#595959',
    bgHover: '#F39200',

    /* Button */
    bgButton: '#101010'
    
}

const dark: cores = {
    /* Backgrounds */
    bgPrimary: '#240707',
    bgSecondary: '#240707',
    bgTertiary: '#240707',
    bgQuaternary: '#240707',
    bgPatrimonio: '#FF0000',
    bglistaPrimary: '#240707',
    

    /* Texto */
    bginfo: '#ffffff',
    textColorPrimary: '#FFFFFF',
    textColorSecondary: '#D9D9D9',

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