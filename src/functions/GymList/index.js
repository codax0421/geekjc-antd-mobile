import React, { Component} from 'react';
import { List } from 'antd-mobile'
import {  WhiteSpace, WingBlank,Badge  } from 'antd-mobile';
import './gymList.less'







const Item = List.Item;
const Brief = Item.Brief;

class GymList extends Component {
    state = { 
                    Gym:  [{id : 1 ,
                            GymName :  "Gonggguan",
                            address :"erw3rwrwrwr",
                            capacity : 24
                        },
                        {   id : 2 ,
                            GymName :  "Daan",
                            address :"erw3rwrwrwr",
                            capacity : 24
                        },
                        {   id : 3 ,
                            GymName :  "xinyi",
                            address :"erw3rwrwrwr",
                            capacity : 24
                        },
                        {       id : 4 ,
                                GymName :  "waimai",
                                address :"erw3rwrwrwr",
                                capacity : 24
                        },
                        {       id : 5 ,
                                GymName :  "liulian",
                                address :"erw3rwrwrwr",
                                capacity : 24
                        },
                         {      id : 6 ,
                                GymName :  "wu",
                                address :"erw3rwrwrwr",
                                capacity : 24
                        },
                        
                    ]
                        

                    
                
                    
} ;

    render() { 
       
        return (
             
            <div class ="shapeGymList">
                <h1 class ="GymTitle">Gym Status</h1>
                {this.state.Gym.map((GymData) => (
                                <div>
                                <WhiteSpace size="sm" />
                                
                                    <Item className="am-list-itemGymList" arrow="horizontal"  onClick={() => {}} extra={"comfort"} id ={GymData.id} am-list-content >
                                        {GymData.GymName}  
                                    <Brief>{GymData.address}</Brief>
                                    </Item>
                                    
                                <WhiteSpace size="sm" />
                                </div>

                )
                    
                    
                    
                )}
                
            </div>
            
        );
    }
   
}
 
export default GymList;