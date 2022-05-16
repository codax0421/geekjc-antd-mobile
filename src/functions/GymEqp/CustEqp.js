import React, { Component} from 'react';
import { Accordion, List  } from 'antd-mobile';
import { ActionSheet, WhiteSpace, WingBlank , Badge ,Toast ,Button, Modal } from 'antd-mobile';
import "./CustEqp.less"

const Item = List.Item;
const Brief = Item.Brief;

class CustomerEquipment extends Component {
   
       
            state = {
            
                    equip : [{
                                    id: 1,
                                    workout : "running" ,
                                    equipment:[{
                                                    equipmentId :1 ,
                                                    equipmentName :"treadmil_01",
                                                    people :  "20ppl"
                                                },
                                                {
                                                    equipmentId :2 ,
                                                    equipmentName :"treadmil_02",
                                                    people :  "20ppl"
                                                },
                                                {
                                                    equipmentId :3 ,
                                                    equipmentName :"treadmil_03",
                                                    people :  "20ppl"
                                                }
                                
                                ]},
                                {
                                    id: 2,
                                    workout : "abs" ,
                                    equipment:[{
                                                    equipmentId :1 ,
                                                    equipmentName :"abs_01",
                                                    people :  "20ppl"
                                                },
                                                {
                                                    equipmentId :2 ,
                                                    equipmentName :"abs_02",
                                                    people : "20ppl"
                                                },
                                                {
                                                    equipmentId :3 ,
                                                    equipmentName :"abs_03",
                                                    people :  "20ppl"
                                                }
                                
                                ]},
                                {
                                    id: 3,
                                    workout : "abs" ,
                                    equipment:[{
                                                    equipmentId :1 ,
                                                    equipmentName :"back_01",
                                                    people : "20ppl"
                                                },
                                                {
                                                    equipmentId :2 ,
                                                    equipmentName :"back_02",
                                                    people : "20ppl"
                                                },
                                                {
                                                    equipmentId :3 ,
                                                    equipmentName :"back_03",
                                                    people : "20ppl"
                                                }
                                
                                ]},
                            
                                        
                        
            
            
            
            ]
        }
      
    render() { 


        return (
            <div >
            
            <p class ="CustTittle">Daan</p>
            <br></br>
           {this.state.equip.map( ( equipData )  =>(
           <div  >
               <WingBlank size="sm">
                <WhiteSpace size="sm" />                
            <Accordion  defaultActiveKey="0" className="my-accordion" onChange={this.onChange}    >
            <Accordion.Panel header= {equipData.workout} >
           
            {equipData.equipment.map((barang ) => (

                <Item arrow="empty"  extra={barang.people} id ={barang.equipmentId} >
                 <Badge  dot   style={{ marginLeft: 30, marginTop :10 ,backgroundColor: '#21b68a', borderRadius: 40 }}>{barang.equipmentName}</Badge>
                <Brief></Brief>
                </Item>

            ))}
            </Accordion.Panel>
            </Accordion>
            <WhiteSpace size="sm" />
            </WingBlank>
        </div>) )}
        </div>
        );
    }
}
 
export default CustomerEquipment;