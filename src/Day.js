'use strict';

import React, {
    Component,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    PropTypes
} from 'react-native';

import px from './Dimentions';

export default class Day extends Component {
    static propTypes = {
        status: PropTypes.string
    };

    render() {
        let {date, status, disabled, onDayPress} = this.props;
        let statusStyle, onPress, textColor;

        if (disabled) {
            textColor = 'gray';
            onPress = null;
        } else {
            switch (status) {
                case 'selected':
                    textColor = 'white';
                    break;
                case 'inRange':
                    textColor = '#64B5F6';
                    break;
            }

            statusStyle = styles[status];
            onPress = () => {
                onDayPress(date);
            }
        }

        return (
            <TouchableOpacity
                activeOpacity={disabled ? 1 : 0.5}
                style={styles.common}
                onPress={onPress}>
                <View style={[styles.dayBackground, statusStyle]}>
                    <Text style={[styles.dayLabel, {color: textColor}]}>{date.getDate()}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    common: {
        width: px(52),
        height: px(52),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    dayBackground: {
        height: px(35),
        width: px(35),
        marginTop: px(10),
        marginLeft: px(10),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#64B5F6'
    },
    inRange: {},
    dayLabel: {
        fontSize: px(20)
    }
});