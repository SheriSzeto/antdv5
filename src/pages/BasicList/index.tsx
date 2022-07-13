/*
 * @Author: sheri
 * @Date: 2022-07-08 15:08:51
 * @LastEditors: sheri
 * @LastEditTime: 2022-07-13 10:04:06
 */
import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Table, Row, Col, Card, Space, Button, Pagination } from 'antd';
import styles from './index.less';

const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const searchLayout = (params) => {};

  const beforeTableLayout = (params) => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          ...
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolBar}>
          <Space>
            <Button type="primary">Add1</Button>
            <Button type="primary">Add2</Button>
          </Space>
        </Col>
      </Row>
    );
  };

  const afterTableLayout = (params) => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          ...
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolBar}>
          <Pagination />
        </Col>
      </Row>
    );
  };

  return (
    <PageContainer>
      {searchLayout()}
      <Card>
        {beforeTableLayout()}
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        {afterTableLayout()}
      </Card>
    </PageContainer>
  );
};

export default index;
