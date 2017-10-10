 // - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
 // returns a function that returns a class that produces a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.




function produceDrivingRange(maxRange) {
	return function(loc1, loc2) {
		let range = Math.abs(parseInt(loc1.slice(0,-2)) - parseInt(loc2.slice(0,-2)));
		if (maxRange - range < 0) {
			return `${range-maxRange} blocks out of range`;
		} else {
			return `within range by ${maxRange-range}`;
		}

	}
}
function produceTipCalculator(percentage) {
	return function	(bill) {
		return bill* percentage;
	}
}
function createDriver(name) {
	let driverId = 0;

	return class Driver {
		constructor (name) {
			this.name = name;
			this.id = ++driverId
		}
	}
}