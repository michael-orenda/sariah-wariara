<template>
    <div id="donate-button-container">
        <div id="donate-button"></div>
        <component :is="'script'">
            PayPal.Donation.Button({
            env:'production',
            hosted_button_id:'TJ49SHU8FZAA6',
            image: {
            src:'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
            alt:'Donate with PayPal button',
            title:'PayPal - The safer, easier way to pay online!',
            }
            }).render('#donate-button');
        </component>
    </div>
</template>