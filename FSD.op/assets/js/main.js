(function($) {

	var	$window = $(window),
		$body = $('body'),
		$menu = $('#menu'),
		$sidebar = $('#sidebar'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$menu
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Search (header).
		var $search = $('#search'),
			$search_input = $search.find('input');

		$body
			.on('click', '[href="#search"]', function(event) {

				event.preventDefault();

				// Not visible?
					if (!$search.hasClass('visible')) {

						// Reset form.
							$search[0].reset();

						// Show.
							$search.addClass('visible');

						// Focus input.
							$search_input.focus();

					}

			});

		$search_input
			.on('keydown', function(event) {

				if (event.keyCode == 27)
					$search_input.blur();

			})
			.on('blur', function() {
				window.setTimeout(function() {
					$search.removeClass('visible');
				}, 100);
			});

	// Intro.
		var $intro = $('#intro');

		// Move to main on <=large, back to sidebar on >large.
			breakpoints.on('<=large', function() {
				$intro.prependTo($main);
			});

			breakpoints.on('>large', function() {
				$intro.prependTo($sidebar);
			});

})(jQuery);

//login .js//


   document.getElementById("login-form").addEventListener("submit", function (event) {
            event.preventDefault();
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // Perform login form validation
            if (email && password!==confirmPassword) {
                // Valid form, perform login logic
                // console.log("Login successful!");
          
                // Invalid form, show error message
                alert("Please check and  fill in all details as you done in registration!");
            }
        });
  document.getElementById("login-form").reset();

  // Show success message
  document.getElementById("success-message").textContent = "successfully loged-in";
  setTimeout(function() {
    document.getElementById("success-message").textContent = "";
  }, 3000);

// register .js//

document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Retrieve form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Validate form inputs  ahahaaaa
  
  if (password !== confirmPassword) {
    alert("Passwords doesn't match Please try again..");
    return;
  }

  // Perform registration logic

  // Reset form inputs
  document.getElementById("register-form").reset();

  // Show success message
  document.getElementById("success-message").textContent = "Your Registration Has successfully Done..";
  setTimeout(function() {
    document.getElementById("success-message").textContent = "";
  }, 3000);
});






















