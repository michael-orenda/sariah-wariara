<template>
  <div id="donate-button-container">
    <div id="donate-button"></div>
    <component :is="'script'">
      PayPal.Donation.Button({
        env: "production",
        hosted_button_id: "JWR6AK23G6EJ8",
        image: {
          src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
          alt: "Donate with PayPal button",
          title: "PayPal - The safer, easier way to pay online!",
        },
        onComplete: function (params) {
          
        },
      }).render("#donate-button");
    </component>
  </div>
</template>