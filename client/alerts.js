if (typeof Alerts === "undefined") {
  Alerts = {};
}

Alerts = {
    /**
     * Default options. Can be overridden for application
     */
    Options: {
      
        /**
         * Show Halflings
         */
        showIcons: true,
      
        /**
         * Button with cross icon to hide (close) alert
         */
        dismissable: true,

        /**
         * CSS classes to be appended on each alert DIV (use space for separator)
         */
        classes: '',

        /**
         * Hide alert after delay in ms or false to infinity
         */
        autoHide: false,

        /**
         * Time in ms before alert fully appears
         */
        fadeIn: 200,

        /**
         * If autoHide enabled then fadeOut is time in ms before alert disappears
         */
        fadeOut: 600,

        /**
         * Amount of alerts to be displayed
         */
        alertsLimit : 5,

        /**
         * Allows use HTML in messages
         */
        html: false
    },

    /**
     * Add an alert
     *
     * @param message (String) Text to display.
     * @param mode (String) One of bootstrap alerts types: success, info, warning, danger
     * @param options (Object) Options if required to override some of default ones.
     *                          See Alerts.defaultOptions for all values.
     */
    add: function (message, mode) {
        mode = mode || 'danger';
        var options = Alerts.Options;

        // Handle alertsLimit
        var count = Alerts.collection_.find({}).count();

        if (count >= options.alertsLimit) {
            Alerts.collection_.find({}, {
                sort : {created: -1},
                skip : options.alertsLimit - 1
            }).forEach(function(row) {
                    Alerts.collection_.remove(row._id);
                });
        }
        Alerts.collection_.insert({message: message, mode: mode, options: options, seen: false, created: +new Date()});
    },

    /**
     * Call this function before loading a new page to clear errors from previous page
     * Best way is using Router filtering feature to call this function
     */
    clear: function () {
        Alerts.collection_.remove({ seen: true });
    },

    removeById: function (id) {
        Alerts.collection_.remove(id);
    },

    // Private members

    collection_: new Meteor.Collection(null)
};

