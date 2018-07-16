import { Button, DatePicker } from 'antd-mobile';
import Layout from '../components/Layout';
import MenuBar from '../components/MenuBar';
import styled from 'styled-components';

import DairyList from '../components/DairyList';
const Title = styled.h1`
 color:red;
 font-size:20px;
`

const list = ['test', 'test2']

export default () => (
    <Layout>
        <MenuBar>
            <Title>
                Styled Component
            </Title>
            <Button>default</Button>
            <DairyList list={list} />
        </MenuBar>
    </Layout>
)
