import $ from 'jquery';

class Like {
	constructor() {
		alert( 'testing from like.js' );
	}

	events() {
		$( '.like-box' ).on( 'click', this.ourClickDispatcher.bind( this ) );
	}

	// methods
	ourClickDispatcher() {
		if ( $( '.like-box' ).data( 'exists' ) === 'yes' ) {
			this.deleteLike();
		} else {
			this.createLike();
		}
	}

	createLike() {}

	deleteLike() {}
}

export default Like;
