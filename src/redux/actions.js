let actions = {
  buttonClickOne: function(text) {
    return {
      type: 'BUTTON_CLICK_ONE',
      text
    }
  },
  buttonClickTwo: function(text) {
    return {
      type: 'BUTTON_CLICK_TWO',
      text
    }
  },
  userArea: function(text) {
    return {
      type: 'USER_AREA',
      text
    }
  },
  afterArea:function(text){
    return{
      type:'AFTER_AREA',
      text
    }
  },
  userPeople: function(text) {
    return {
      type: 'USER_PEOPLE',
      text
    }
  },
  officeSelect: function(text) {
    return {
      type: 'OFFICE_SELECT',
      text
    }
  },
  addList: function(text) {
    return {
      type: 'OFFICE_ADD',
      text
    }
  },
  feachPrice: function(text) {
    return {
      type: 'FEACH_PRICE',
      text
    }
  },
  lastPrice: function(text) {
    return {
      type: 'LAST_PRICE',
      text
    }
  },
  lastArea: function(text) {
    return {
      type: 'LAST_AREA',
      text
    }
  },
  phoneNumber:function(text){
    return{
      type:'PHONE_NUMBER',
      text
    }
  },
  token:function(text){
    return{
      type:'TOKEN',
      text
    }
  },
  code:function(text){
    return{
      type:'CODE',
      text
    }
  },
  projectId:function(text){
    return{
      type:'PROJECT_ID',
      text
    }
  },
  checkBoxDistrictId:function(text){
    return{
      type:'CHECKBOX_DISTRICTID',
      text
    }
  },
  checkBoxStyle:function(text){
    return{
      type:'CHECKBOX_STYLE',
      text
    }
  },
  checkBoxArea:function(text){
    return{
      type:'CHECKBOX_AREA',
      text
    }
  },
  checkBoxProgress:function(text){
    return{
      type:'CHECKBOX_PROGRESS',
      text
    }
  }


}

export default actions;
