/**
* Equal Block Heights
* Defined by data-attributes added by plugin in editor
*/
var BlockAnimations = function()
{
	const self = this;
	self.elements = {};
	self.elementGroups = {};
	self.keys = [];

	self.selectors = {
		element : '[data-equal-height]', // The element being set
		key : 'data-equal-height', // The key for the element
	}

	self.bindEvents = function()
	{
		document.addEventListener('DOMContentLoaded', function(){
			self.setElements();
			self.setHeights();
		});
		window.addEventListener('resize', self.debounce(function(){
			self.setHeights();
		}, 500));
	}

	/**
	* Set the elements to be sized
	*/
	self.setElements = function()
	{
		self.elements = document.querySelectorAll(self.selectors.element);
		[...self.elements].forEach(function(el){
			let elKey = el.getAttribute(self.selectors.key);
			if ( self.keys.indexOf(elKey) === -1 ) self.keys.push(elKey);
		});
		[...self.elements].forEach(function(el){
			let elKey = el.getAttribute(self.selectors.key);
			if ( !self.elementGroups.hasOwnProperty(elKey) ){
				self.elementGroups[elKey] = [];
			}
			self.elementGroups[elKey].push(el);
		});
	}

	/**
	* Set the element heights
	*/
	self.setHeights = function()
	{
		for (const property in self.elementGroups) {
			let elements = self.elementGroups[property];

			// Get the tallest element in this group (defined by key)
			let height = 0;
  			for ( var i = 0; i < elements.length; i++ ){
  				elements[i].removeAttribute('style');
  				let elHeight = elements[i].offsetHeight;
  				if ( elHeight > height ) height = elHeight;
  			}

  			if ( window.innerWidth < 768 ) return;
  			for ( var i = 0; i < elements.length; i++ ){
  				elements[i].setAttribute('style', 'height:' + height + 'px');
  			}
		}
	}

	self.debounce = function(func, wait, immediate)
	{
		var timeout;
		return function(){
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	return self.bindEvents();
}
new BlockAnimations;