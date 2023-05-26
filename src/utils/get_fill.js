export const get_fill = (people) => {
    if (people < 5) {
        return '#21d927';
    } else if (people >= 5 && people <= 15) {
        return '#f2b007';
    } else {
        return '#e82e2e';
    }
}