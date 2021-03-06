/**
 * Created by himadri on 3/19/16.
 */

var AutoFormObj = {
  type: "select-radio-inline",
  afFormGroup: {
    label: false,
    class: 'qa-option'
  },
  options: function () {
    return [
      {label: "Yes", value: "YES"},
      {label: "No", value: "NO"},
      {label: "Don't Know", value: "NA"}
    ];
  }
};

DrugReactionProbabilitySchema = new SimpleSchema({

  txtId : {
    type: String,
    optional: true,
    autoform: {
      omit: true,
      type: 'hidden',
      afFormGroup: {
        label: false
      }
    }
  },

  queryId : {
    type: String,
    optional: true,
    autoform: {
      omit: true,
      type: 'hidden',
      afFormGroup: {
        label: false
      }
    }
  },

  shortid : {
    type: String,
    optional: true,
    autoform: {
      omit: true,
      type: 'hidden',
      afFormGroup: {
        label: false
      }
    }
  },

  userName : {
    type: String,
    optional: true,
    autoform: {
      omit: true,
      type: 'hidden',
      afFormGroup: {
        label: false
      }
    }
  },

  drugName: {
    type : String,
    label : "Brand Name",
    autoform: {
      afFormGroup: {
        label: false
      }
    }
  },

  manufacturerName: {
    type : String,
    label : "Manufacturer Name"
  },

  Qus1 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus2 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus3 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus4 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus5 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus6 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus7 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus8 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus9 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  },

  Qus10 : {
    type: String,
    optional: true,
    autoform: AutoFormObj
  }
});