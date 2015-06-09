
import moment from 'npm:moment';

function formatDate(date, format) {
	return moment(date).format(format);
}

export {
formatDate
};

/*

function formatDate(date, format) {
return window.moment(date).format(format);
}


import { format } from 'borrowers-dates';

function formatDate(date) {
return format(date);
}


*/