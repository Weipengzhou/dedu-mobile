const initialState = {
  people:0,
  area:{
    value:0
  },
  checkbox_districtId: {
    districtId: '全部',
    one: '0'
  },
  checkbox_style: {
    style: '装修风格',
    two: '0'
  },
  checkbox_area: {
    area: '面积',
    three: {
      areamin: '',
      areamax:0
    }
  },
  checkbox_progress: {
    progress: '施工进度',
    four: ''
  }
}

//用户输入面积  area  //剩余面积 afterarea //折算后面积 lastarea
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_AREA':

      return Object.assign({}, state, {
        area: {
          value: action.text
        }
      });
      case 'PHONE_NUMBER':

      return Object.assign({},state,{
        phone:action.text
      });
      case 'TOKEN':

      return Object.assign({},state,{
        token:action.text
      });
      case 'PROJECT_ID':
      return Object.assign({},state,{
        projectId:action.text
      });
      case 'CODE':
              console.log(action.text)
      return Object.assign({},state,{
        code:action.text
      });
      case 'AFTER_AREA':
      return Object.assign({}, state, {
        afterarea: {
          value: action.text
        }
      });
      case 'LAST_AREA':
      return Object.assign({}, state, {
        lastArea: {
          value: action.text
        }
      });
    case 'USER_PEOPLE':
      return Object.assign({}, state, {
        people: action.text
      });
    case 'BUTTON_CLICK_ONE':
      return Object.assign({}, state, {
        todos1: action.text.checked
      });
    case 'BUTTON_CLICK_TWO':
      return Object.assign({}, state, {
        todos2: action.text.checked
      });
    case "FEACH_PRICE":
      return Object.assign({}, state, {
        price: action.text
      });
    case 'OFFICE_SELECT':
      return Object.assign({}, state, {
        select: action.text
      });
    case 'OFFICE_ADD':
    // console.log(action.text.afterarea)
      return Object.assign({}, state, {
        afterarea: action.text.afterarea
      });
    case 'LAST_PRICE':
      return Object.assign({}, state, {
        lastPrice:action.text
      });
    case 'CHECKBOX_DISTRICTID':
    return Object.assign({}, state, {
      checkbox_districtId:action.text
    });
    case 'CHECKBOX_STYLE':
    return Object.assign({}, state, {
      checkbox_style:action.text
    });
    case 'CHECKBOX_AREA':
    return Object.assign({}, state, {
      checkbox_area:action.text
    });
    case 'CHECKBOX_PROGRESS':
    return Object.assign({}, state, {
      checkbox_progress:action.text
    });

    default:
      return state;
  }
}

export default reducer;
