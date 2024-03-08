import $ from 'jquery';

class MyNotes {
	constructor() {
		this.events();
	}

	events() {
		$( '.delete-note' ).on( 'click', this.deleteNote );
	}

	// Methods
	deleteNote() {
		alert( 'deleteeeeee' );
	}
}

export default MyNotes;
