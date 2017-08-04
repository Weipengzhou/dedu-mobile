import React from 'react';
import './Index.less';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import ajax from '../../components/ajax/ajax'

const Button = (props) => (
  <div><input type={props.type} placeholder={props.placeholder} className={props.className} onChange={(e) => props.onChange({value: e.target.value, name: props.name})}/></div>
)
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      isModalOpen: false,
      name: '',
      phone: '',
      kind: '',
      nameOn: false,
      phoneOn: false,
      kindOn: false
    }
  }

  openModal() {

    this.setState({isModalOpen: true})
    console.log(this.state)
  }

  closeModal() {
    this.setState({isModalOpen: false});
    console.log(this.state)
  };
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
  onSubmit() {
    var data = {
      name: this.state.name,
      phone: this.state.phone,
      type: this.state.kind
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
        url: 'http://www.51ddo.com/api/feedback/designerReservation',
        data: data,
        async: true,
        dataType: 'json',
        success: function(data) {
          if (data.msg === "OK") {
            alert('预约成功，请等待我们与您联系');
            _this .setState({isModalOpen: false})

          } else {
            alert('系统异常，请稍后再提交！');
            _this.setState({isModalOpen: false})
          }
        }
      })
    }

  }
  render() {
    console.log(this.state)
    return (
      <div className='Index'>
        <div className='nav'>
          <div className='center'>
            <span></span>
            <div className="text">
              <h2>公装无忧</h2>
              <p>一站式公装服务平台</p>
            </div>
            <span></span>
            <button onClick={this.openModal}>立即预约</button>
          </div>
        </div>
        <div className='bottom'>
          <h2>公装无忧能做什么？</h2>
          <ul>
            <li>
              <div className='center'>
                <img src={one} alt='硬装'/>

              </div>
              <span>399</span>
              <p>硬装套餐</p>
            </li>
            <li>
              <div className='center'>
                <img src={two} alt='施工'/>

              </div>
              <span>施工</span>
              <p>在线施工进度查询</p>
            </li>
            <li>
              <div className='center'>
                <img src={three} alt='报价'/>

              </div>
              <span>报价</span>
              <p>在线报价</p>
            </li>
            <li>
              <div className='center'>
                <img src={four} alt='设计'/>

              </div>
              <span>设计</span>
              <p>个性化设计案例</p>
            </li>
          </ul>
        </div>
        <div className={this.state.isModalOpen
          ? "on model"
          : "off model"}>
          <div className="mask" onClick={this.closeModal}></div>
          <div className="to">
            <i onClick={this.closeModal}>✖️</i>
            <h2>填写预约信息<span>(提交后我们会尽快联系您)</span>
            </h2>
            <Button type='text' placeholder='请输入您的称呼' className={this.state.nameOn
              ? "ono name"
              : "name"} name='name' onChange={this.onChange}/>
            <Button type="phone" placeholder='请输入您的联系电话' className={this.state.phoneOn
              ? "ono phone"
              : "phone"} name='phone' onChange={this.onChange}/>
            <Button type='text' placeholder='请输入您的项目类型' className={this.state.kindOn
              ? "ono kind"
              : "kind"} name='kind' onChange={this.onChange}/>

            <button className="excal" onClick={this.onSubmit}>立即预约</button>
          </div>
        </div>

      </div>
    )
  }

}

export default Index
