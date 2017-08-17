import React from 'react';
import './Cooperation.less';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';
import seven from './7.png';
import ajax from '../../components/ajax/ajax';
import LeftNav from '../../components/LeftNav/LeftNav';
let list = [{'src':one,'name':'合作设计师'},{'src':two,'name':'房产中介'},{'src':three,'name':'办公租赁'},{'src':four,'name':'施工班组'},{'src':five,'name':'空调消防'},{'src':six,'name':'家具供应商'},{'src':seven,'name':'其他'}]
const Online =(props)=>(
  <ul>
{ props.list.map((result,index)=>(
<li key={index} onClick={(e)=>(props.onClick({style:result.name}))} >
    <div className="img">
        <img src={result.src} alt="办公装修"/>
    </div>
    <p>{result.name}</p>
</li>

))}
</ul>
)

const Button = (props) => (
  <div><input type={props.type} placeholder={props.placeholder} className={props.className} onChange={(e) => props.onChange({value: e.target.value, name: props.name})}/></div>
)
class  Index extends React.Component{
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
    this.state={
      isModalOpen: false,
      name: '',
      phone: '',
      kind: '',
      nameOn: false,
      phoneOn: false,
      kindOn: false
    }

  }
  onClick(e){
    this.setState({title:e.style});
      this.setState({isModalOpen: true})
  };


  closeModal() {
    this.setState({isModalOpen: false});
    console.log(this.state)
  };
  onSubmit() {

    var data = {
      'industry':this.state.title,
      'name':this.state.name,
      'phone':this.state.phone,
      'remark':this.state.kind,
    }
    if (this.state.name === '') {
      this.setState({nameOn: true})
      return false
    } else if (this.state.phone === '' || !this.state.phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)) {
      this.setState({phoneOn: true})
      return false
    } else if (this.state.kind === '') {
      this.setState({kindOn: true})
      return false
    } else {
      var _this = this;
      ajax({
        type: "POST",
        url: 'http://www.51ddo.com/api/feedback/cooperation',
        data: data,
        async: true,
        dataType: 'json',
        success: function(data) {
          if (JSON.parse(data).msg === "OK") {
            alert('提交成功，请等待我们与您联系');
            _this .setState({isModalOpen: false})

          } else {
            alert('系统异常，请稍后再提交！');
            _this.setState({isModalOpen: false})
          }
        }
      })
    }

  }
  onChange(e) {
    switch (e.name) {
      case 'name':
        this.setState({name: e.value});
        if (e.value !== '') {
          this.setState({nameOn: false})
        }
        break;
      case 'phone':
        this.setState({phone: e.value});
        if (e.value !== '' || !e.value.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)) {
          this.setState({phoneOn: false})
        }
        break;
      case 'kind':
        this.setState({kind: e.value});
        if(e.value !== '') {
          this.setState({kindOn: false})
        }
        break;
      default:

    }

  }
  render(){
    console.log(this.state)
    return(
      <div className='Cooperation'>
        <div className='center'>
          <span></span>
          <div className="text">
              <h2><b>合作</b>渠道</h2>
              <p>Online offer</p>
          </div>
          <span></span>

        </div>
        <Online list={list} onClick={this.onClick}/>
        <div className={this.state.isModalOpen? "on model": "off model"}>
          <div className="mask" onClick={this.closeModal}></div>
          <div className="to">
            <i onClick={this.closeModal}>✖️</i>
            <h2>{this.state.title}<span>(提交后我们会尽快联系您)</span>
            </h2>
            <Button type='text' placeholder='请输入您的称呼' className={this.state.nameOn
              ? "ono name"
              : "name"} name='name' onChange={this.onChange}/>
            <Button type="phone" placeholder='请输入您的联系电话' className={this.state.phoneOn
              ? "ono phone"
              : "phone"} name='phone' onChange={this.onChange}/>
            <Button type='textarea' placeholder='请输入您的备注' className={this.state.kindOn
              ? "ono kind"
              : "kind"} name='kind' onChange={this.onChange} />

            <button className="excal" onClick={this.onSubmit}>立即预约</button>
          </div>
        </div>



      </div>
    )
  }
}

class Cooperation extends React.Component{
  render(){
    return(
      <LeftNav text={<Index/>}></LeftNav>
    )
  }
}
export default Cooperation;
