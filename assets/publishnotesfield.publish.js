/*-------------------------------------------------------------------------
Publish Notes Field JS
-------------------------------------------------------------------------*/

(function($) {

	'use strict';
	
	/**
	 * Edit in place function
	 */
	var editInPlace = function() {
		var field = $(this);
		var editor = $('.publishnotes-editor', field);
		var save = $('.control input', field);
		var cancel = $('.control a', field);
		var edit = $('.publishnotes-edit', field);
		var editable = $('.publishnotes-note', field);

		// Hover/open editable
		$('.publishnotes-edit', field).bind('click', function(e) {
			editor.show();
			edit.hide();
			editable.hide();
			e.preventDefault();
		}).hover(function() {
			editable.addClass('hover');
		}, function() {
			editable.removeClass('hover');
		});

		// Commit changes to textarea
		$(save).bind('click', function() {
			var value = $('textarea', field).val();
			editable.html(value);
			edit.show();
			editable.show();
			editor.hide();
			return false;
		});

		// Commit changes to textarea
		$(cancel).bind('click', function() {
			var value = editable.html();
			$('textarea', field).val(value);
			edit.show();
			editable.show();
			editor.hide();
			return false;
		});

		edit.show();
		editable.show();
		editor.hide();
	};

	var init = function () {
		$('.field-publishnotes.editable').each(editInPlace);
	};

	$(init);

})(jQuery);
