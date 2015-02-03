# bootstrap-alerts

Display simple alerts using bootstrap styling and Halflings icons.

(intially taken from https://github.com/EtherPOS/simple-bootstrap3-alerts/)


[![Build Status](https://travis-ci.org/selaias/bootstrap-alerts.png)](https://travis-ci.org/selaias/bootstrap-alerts)


# Dependencies

Recommended bootstrap package

```
meteor add twbs:bootstrap
```

# Installation

    meteor add selaias:bootstrap-alerts

# Options 

```
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
    }
```

# Adding Alerts

```
  Alert.add(msg, type);

```

Types: success, info, warning, danger

msg can be text or an Error object.  If Error object it will display Error.reason

# Clearing Alerts

```
  Alerts.clear()
```

# Handlebars

```
 {{> alerts}}
```

# Router Usage
 
```
Router.onBeforeAction(function(){
  Alerts.clear();
  this.next();
});
```

or :
```
Router.route('/', {
  name: 'home',
  onBeforeAction: function(){
    Alerts.clear();
    this.next();
  }
});
```

# License
MIT
