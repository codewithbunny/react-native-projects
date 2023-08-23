import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.00001;

const getLocation = increment => {
    return {
        timestamp: 10000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 77.758133 + increment * tenMetersWithDegrees,
            latitude: 20.929720 + increment * tenMetersWithDegrees

        }
    }
};

let counter = 0;
setInterval(()=> {
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++;
    // console.log(counter);
}, 1000)