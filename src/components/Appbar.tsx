import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.bgAppBar,
        height: 70,
        display: 'flex',
        flexDirection: 'row',
    },
    child: {
        paddingLeft: 30,
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <View style={styles.child}>
                    <Link href="/home">
                        <Text color={'textSecondary'} fontSize={'subheading'} fontWeight={'bold'}>
                            Repositories
                        </Text>
                    </Link>
                </View>
                <View style={styles.child}>
                    <Link href="/signin">
                        <Text color={'textSecondary'} fontSize={'subheading'} fontWeight={'bold'}>
                            Sign in
                        </Text>
                    </Link>
                </View>
            </ScrollView>
        </View>
    );
};

export default AppBar;