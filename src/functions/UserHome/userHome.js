import React, { Component} from 'react';
import { List } from 'antd-mobile'
import {  Card, WhiteSpace, WingBlank,Button ,Accordion } from 'antd-mobile';
import './UserHome.less'
import Loadable from 'react-loadable'
import { withRouter } from 'react-router-dom'
import getUrlQuery from '../../utils/getUrlQuery'

const Item = List.Item;
const Brief = Item.Brief;

//import asdsd from "../GymList/index"

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const LoadableUserGymList= Loadable({
  loader: () => import('../GymList/index'),
	loading: Loading,
	delay: 300
});

class UserHome extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
	}

  componentWillMount() {
		const { search } = this.props.location
		if(search !== ''){
			const query = getUrlQuery(search)
			console.log(query)
			switch(query.type){
				case 'article':
					this.setState({selectedTab: query.type})
					break;
				case 'nbcollect':
					this.setState({selectedTab: query.type})
					break;
				default:
					return
			}
		}
	}
 
  data = { 
    reservation : [{
                        id: 1,
                        activity : "running" ,
                        date :"4/3",
                        detail:[{
                                        time :"2am" ,
                                        machine :"treadmil_01",
                                        Gym : "daan"
                                    },
                                
                
                ]},
                {
                  id: 2,
                  activity : "boxing" ,
                  date :"3/2",
                  detail:[{
                                  time :"2am" ,
                                  machine :"treadmil_01",
                                  Gym : "daan"
                              },
                          
          
          ]}

              
              ]} 


    render() { 
        return (
        <div class = "shapeHome">
      <h1 className ="HomeTitle">Home</h1>
      <WingBlank size="large">
        <WhiteSpace size="xs" />
        <Card className ="am-cardBackGround"  >
          <Card.Header 
            title="My Reservation"
            extra={<Button  inline size="small"  className= "reservationButton"><p>ADD</p></Button>}
      />
      <Card.Body>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
      {this.data.reservation.map( ( reservationData)  =>(
           <div  >
               <WingBlank size="sm">
                <WhiteSpace size="sm" />
             
            <Accordion defaultActiveKey="0"  onChange={this.onChange} >
            <Accordion.Panel header= {reservationData.activity} >
           
            {reservationData.detail.map((content ) => (

                <Item  multipleLine onClick={() => {}}  id ={content.id}  className = "AccodianBodyUser" >
                {content.machine }
                 {content.Gym}
                <Brief > {content.Gym}</Brief>
                </Item >
        
            ))}
            </Accordion.Panel >
            </Accordion>
              
            <WhiteSpace size="sm" />
                                </WingBlank>

        </div>) )}
          </div>
      </Card.Body>
    </Card>
    <WhiteSpace size="lg" />
    </WingBlank>
   <br></br>
   <br></br>
   <br></br>     
   
                  <Button  href="/gymlist" className = "UserButtonOrangeGymStatus"  inline style={{ marginLeft: '80px' }}  selected={this.state.selectedTab === 'home'}>
                  <p class ="UserButtonText">Gym Status</p>
                  <WhiteSpace />
                  </Button>
   
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button href="/userstat" className = "UserButtonOrangeStatistic" inline style={{marginLeft: '10px' }}>
             
                  <p class ="UserButtonText">Statistic</p>
                </Button>
                <WhiteSpace />
                <WhiteSpace />
                <Button href="" className = "UserButtonOrangeTraningProgram" inline style={{ marginLeft: '80px' }}>
                  
                  <p class ="UserButtonText">Training Program</p>
                </Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button  href=""  className = "UserButtonOrangeOthers"  inline style={{ marginLeft: '10px' }}>
                
                  <p class ="UserButtonText">Others</p>
                </Button>
                <WhiteSpace />
        </div>
        );
    }
}
 
export default UserHome;