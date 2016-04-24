'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    Text,
    PropTypes
} from 'react-native';

import px from './Dimentions';
import Day from './Day'

export default class Month extends Component {
    constructor(props) {
        super(props);

        this.weekDaysLocale = props.weekDaysLocale.slice();

        if (props.startFromMonday) {
            this.weekDaysLocale.push(this.weekDaysLocale.shift());
        }
    }

    static propTypes = {
        changeSelection: PropTypes.func.isRequired
    };

    render() {
        let {
            days,
            changeSelection,
            style,
            monthsLocale,
        } = this.props;

        var month = monthsLocale[days[15].date.getMonth()];
        var year = days[15].date.getFullYear();

        return (
            <View style={[styles.container, style]}>
                <View style={styles.header}>
                    <Text style={styles.monthLabel}>
                        {month}
                    </Text>
                    <Text style={styles.yearLabel}>
                        {year}
                    </Text>
                </View>
                <View style={styles.monthDays}>
                    {this.weekDaysLocale.map((dayName, i) => {
                        return (
                            <View key={i} style={styles.weekDay}>
                                <Text style={styles.weekDayLabel}>{dayName}</Text>
                            </View>
                        );
                    })}
                    {days.map((day, i) => {
                        return (
                            <Day
                                key={i}
                                disabled={day.disabled}
                                status={day.status}
                                date={day.date}
                                onDayPress={changeSelection}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 7 * px(53)
    },
    header: {
        flex: 1,
        flexDirection: 'column',
        marginTop: px(20),
        marginBottom: px(20),
        marginLeft: px(15)
    },
    monthLabel: {
        fontSize: px(30),
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    yearLabel: {
        fontSize: px(14),
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    monthDays: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 5,
        borderColor: 'gray',
        borderBottomWidth: 1
    },
    weekDay: {
        width: px(53),
        height: px(35),
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    weekDayLabel: {
        fontSize: px(18)
    }
});