 import React, { useState } from 'react';
 import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 import { Calendar } from 'react-native-calendars';

//state that handles previous selected dates & current date separately
const LogScreen = () => {
    const [markedDates, setMarkedDates ] = useState({});
    const [ currentSelectedDate, setCurrentSelectedDate  ] = useState(null);
    const [ovulationDate, setOvulationDate] = useState('');


//state managing selection and deselection of dates
const handleSelection = (date) => {
    const updatedDates = { ...markedDates };

    if(updatedDates[date.dateString]){
        delete updatedDates[date.dateString];
    } else {
        updatedDates[date.dateString]={selected: true, marked: true};
    }
    setMarkedDates(updatedDates);

};

const logPeriodDates = () => {
    console.log('Selected Period Dates:',Object.keys(markedDates));
    const estimatedOvulationDate = calculateOvulationDate(Object.keys(markedDates));
    setOvulationDate(`Estimated Ovulation Date: ${estimatedOvulationDate}`);

};

const calculateOvulationDate = (periodDates) => {
     const nextPeriodDate = new Date()
};


return (
    <View style = {styles.container}>
        <Text style={styles.title}>Log your Period Dates</Text>
        <Calendar
        style = {styles.calendar}
        markedDates = {markedDates}
        selectDay = {(date) => handleSelection(date)}
        />
        <TouchableOpacity
            style={styles.logButton}
            onPress={logPeriodDates}
            disabled={Object.keys(markedDates).length === 0}
        >
            <Text style={styles.logButtonText}>Log Period Dates</Text>

        </TouchableOpacity>

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    calendar: {
        marginBottom:20,
    },
    
    logButtonText:{
        color: 'white',
        fontWeight: 'bold',
    },


    logButton: {
         backgroundColor: 'blue',
         padding: 10,
        borderRadius: 5,   
    },
});