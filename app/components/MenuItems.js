import React from 'react';
import {
    View,
    Image
} from 'react-native';
import Styles from './MenuItemsStyles'

export default class MenuItem extends React.Component {
    render() {
        return (

            <View style={Styles.menuItem}>
                <Image
                    source={this.props.itemImage}
                    style={Styles.image} />
            </View>

        );
    }
}