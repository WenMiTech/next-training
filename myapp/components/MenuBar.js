import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';


export default class extends Component {

    render() {
        const { children } = this.props;
        return (
            <div style={{ position: 'fixed', top: 0, height: "100%", width: "100%" }}>
                <TabBar unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white">
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="article"
                        key="文章"
                        selected={true}
                        onPress={() => {

                        }}
                        data-seed="logId1"
                    >
                        {children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="dairy"
                        key="日报"
                        selected={false}
                        onPress={() => {

                        }}
                        data-seed="logId1"
                    >
                        {children}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="user"
                        key="我的"
                        selected={false}
                        onPress={() => {

                        }}
                        data-seed="logId1"
                    >
                        {children}
                    </TabBar.Item>
                </TabBar>
            </div>)
    }
}