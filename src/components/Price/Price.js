import CountPrice from '../CountPrice/CountPrice';
const Price=(props,e)=>{

  const prop = props;


  let a1 = [];
  let a2 = [];
  let a3 = [];
  let a4 = [];
  let a5 = [];
  let a6 = [];
  let a7 = [];
  let a8 = [];
  let an = [];
  let a10 = [];
  for (var i in prop.select) {
    switch (prop.select[i].type) {
      case 'Gmanager':
        a1.push(prop.select[i].value);
        break;
      case 'manager':
        a2.push(prop.select[i].value);
        break;
      case 'department':
        a3.push(prop.select[i].value);
        break;
      case 'reception':
        a8.push(prop.select[i].value);
        break;
      case 'coffee':
        a5.push(prop.select[i].value);
        break;
      case 'office':
        a7.push(prop.select[i].value);
        break;
      case 'storage':
        a6.push(prop.select[i].value);
        break;
      case 'meeting':
        a4.push(prop.select[i].value);
        break;
      case 'open':
        a10.push(prop.select[i].value)
        break;
      case 'custom':
        an.push(prop.select[i].value);
        break;
      default:
        return console.log('no')
    }
  }
  const price=(eve)=>(eve.price);
  const data = prop.price;
  const F1_1 =  price(data.Gmanager[2]);   //最小价格
  const F1_2 =  price(data.Gmanager[1]);   //中间价格
  const F1_3 =  price(data.Gmanager[0]);   //最大价格
  const F2_1 =  price(data.manager[2]);   //主管办公室
  const F2_2 =  price(data.manager[1]);   //主管办公室
  const F2_3 =  price(data.manager[0]);   //主管办公室
  const F3_1 =  price(data.department[2]);   //独立办公室
  const F3_2=   price(data.department[1]);   //独立办公室
  const F3_3 =  price(data.department[0]);   //独立办公室
  const F4_1 =  price(data.meeting[2]);   //会议室
  const F4_2 =  price(data.meeting[1]);   //会议室
  const F4_3 =  price(data.meeting[0]);   //会议室
  const F5_1 =  price(data.coffee[2]);    //茶水间
  const F5_2 =  price(data.coffee[1]);    //茶水间
  const F5_3 =  price(data.coffee[0]);    //茶水间
  const F6_1 =  price(data.storage[2]);   //储物室
  const F6_2 =  price(data.storage[1]);   //储物室
  const F6_3 =  price(data.storage[0]);   //储物室
  const F7_1 =  price(data.office[2]);   //前厅
  const F7_2 =  price(data.office[1]);   //前厅
  const F7_3 =  price(data.office[0]);   //前厅
  const F8_1 =  price(data.reception[2]);     //接待室
  const F8_2 =  price(data.reception[1]);     //接待室
  const F8_3 =  price(data.reception[0]);     //接待室
  const F9_1 =  price(data.custom[2]);   //自定义
  const F9_2 =  price(data.custom[1]);   //自定义
  const F9_3 =  price(data.custom[0]);   //自定义
  const F10_1 =  price(data.open[2]);   //开敞
  const F10_2 =  price(data.open[1]);   //开敞
  const F10_3 =  price(data.open[0]);   //开敞

  const Gmanager_m   = CountPrice(a1,data.Gmanager[1].min,data.Gmanager[1].max,F1_3,F1_2,F1_1) //总经理
  const manager_m    = CountPrice(a2,data.manager[1].min,data.manager[1].max,F2_3,F2_2,F2_1)      //经理or主管
  const department_m = CountPrice(a3,data.department[1].min,data.department[1].max,F3_3,F3_2,F3_1) //部门or独立
  const reception_m  = CountPrice(a8,data.reception[1].min,data.reception[1].max,F8_3,F8_2,F8_1)  //接待室
  const coffee_m     = CountPrice(a5,data.coffee[1].min,data.coffee[1].max,F5_3,F5_2,F5_1)         //茶水间
  const storage_m    = CountPrice(a6,data.storage[1].min,data.storage[1].max,F6_3,F6_2,F6_1)      //储物室
  const meeting_m    = CountPrice(a4,data.meeting[1].min,data.meeting[1].max,F4_3,F4_2,F4_1)      //会议室

  const open_m       = CountPrice(a10,data.open[1].min,data.open[1].max,F10_3,F10_2,F10_1)             //敞开
  // console.log(a10,data.open[1].min,data.open[1].max,F10_3,F10_2,F10_1)
  const custom_m     = CountPrice(an,data.custom[1].min,data.custom[1].max,F9_3,F9_2,F9_1)         //自定义
  const office_m     = CountPrice(a7,data.office[1].min,data.office[1].max,F7_3,F7_2,F7_1)         //前厅
  // console.log(Gmanager_m,manager_m,department_m,reception_m,coffee_m,storage_m,meeting_m,open_m,custom_m,office_m)
  let m=(Gmanager_m+manager_m+department_m+reception_m+coffee_m+storage_m+meeting_m+open_m+custom_m+office_m)
  // const js =(id)=>{
  //   for (var i =0;i<bao.length;i++){
  //       if(bao[i].id == id){
  //           return bao[i].price
  //       }
  //   }
  // }
  // const pri1 = js(3)
  let ch1 = 0;
  let ch2 = 0;

  if(prop.todos1 ){
       ch1 = data.earth[0].price;
  }
  if(prop.todos2){
       ch2 = data.top[0].price;
  }
  const xsm = prop.lastArea;
  const nextprice = m-(ch1+ch2)*xsm;
  const lastprice =Math.round(nextprice*1.12)

  prop.lastPrice(lastprice);

}
export default Price;
