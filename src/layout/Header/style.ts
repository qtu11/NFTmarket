import { StyleSheet } from "react-native";
import { Size, Light } from '~/constants/theme';

const { GENERAL } = Size;
const { COLORS } = Light;

export const styles = StyleSheet.create({
    container: {
        height: GENERAL.headerHeight,
        backgroundColor: COLORS.white
    },
    logo: {
        width: 200,
        height: 50
    }
})

export default styles;