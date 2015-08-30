Template.control.events({
   "click .control-more-stress" () {
        Meteor.call("moreStress", () => {});
   },
   "click .control-less-stress" ()  {
        Meteor.call("lessStress", () => {});
   },
   "click .control-reset" () {
        Meteor.call("resetStress", () => {});
   },
   "click .control-stress-card" () {
        Meteor.call("addStressCard", () => {});
   },
   "click .control-reset-cards" () {
        Meteor.call("resetCards", () => {});
   },
   "click .control-clear-cards" () {
        Meteor.call("clearCards", () => {});
   },

   "click .control-increase-temp" () {
        Meteor.call("increaseTemp", () => {});
   },
   "click .control-decrease-temp" () {
        Meteor.call("decreaseTemp", () => {});
   },
    "click .control-add-temp-card" () {
        Meteor.call("addTempCard", () => {});
   }

});