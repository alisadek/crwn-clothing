import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51KLCCJLR68YUb02djAF1b6masztrtKTKHLHkKAUyYbAwL08r1WgA9YVBYd05WkIWRf51yKc0IcLgdqiMuczwXx9G00Y5ImfMoj";
	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful!");
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
