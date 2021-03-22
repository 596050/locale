import React from 'react'

import { Col, Empty, Form, FormElement, Row, Search } from '../../component'

import List from './List'
import { usePostcodeSearch } from './usePostcodeSearch'

const Dashboard = () => {
  const { loading, location, handleSearch } = usePostcodeSearch()

  const emptyDescription = location?.length ? false : 'No locations'

  return (
    <section className="dashboard-container">
      <Row justify="center">
        <Col xs={22} sm={22} md={22} lg={12}>
          <Form>
            <FormElement id="searchPostcode" label="Enter postcode">
              <Search
                placeholder="E8 3DB"
                enterButton="Search"
                size="large"
                onSearch={(value: string) =>
                  handleSearch(value, 'searchPostcode')
                }
                loading={loading}
              />
            </FormElement>
          </Form>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={22} md={22} lg={12}>
          {location?.length ? (
            <List data={location}></List>
          ) : (
            <Empty description={emptyDescription} />
          )}
        </Col>
      </Row>
    </section>
  )
}

export default Dashboard
