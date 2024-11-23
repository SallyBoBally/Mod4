const birthDate = new Date(1995, 11, 13);
const currentDate = new Date();
const date1 = new Date(2025, 11, 13);
const date2 = new Date(2025, 11, 22);

const calculateDaysBetween = (start, end) => {
    const diffTime = end - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
const daysBetween = calculateDaysBetween(birthDate, currentDate);
document.getElementById("daysDifference").textContent = `Number of days between birthdate and today: ${daysBetween} days`;

const calculateYearsMonthsDays = (start, end) => {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months--;
        days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
};
const { years, months, days } = calculateYearsMonthsDays(birthDate, currentDate);
document.getElementById("yearsMonthsDays").textContent = 
    `Age: ${years} years, ${months} months, and ${days} days`;

const closestDate = (d1, d2, current) => {
    const diff1 = Math.abs(current - d1);
    const diff2 = Math.abs(current - d2);
    return diff1 < diff2 ? d1 : d2;
};
const nearestDate = closestDate(date1, date2, currentDate);
document.getElementById("closestDate").textContent = 
    `Date closest to today: ${nearestDate.toDateString()}`;

const compareDates = (d1, d2) => {
    return d1 < d2 ? "before" : "after";
};
const comparisonResult = compareDates(date1, date2);
document.getElementById("dateComparison").textContent = 
    `The first date is ${comparisonResult} the second date`;

const getLondonTime = () => {
    const options = { timeZone: "Europe/London", hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return new Intl.DateTimeFormat("en-GB", options).format(new Date());
};
document.getElementById("currentTimeLondon").textContent = 
    `Current time in London: ${getLondonTime()}`;