import React from 'react'
import { Col, Typography, Skeleton } from 'antd'
// import { Link } from "gatsby"

import Layout from '../layout/layout'
import SEO from '../components/seo'
import Row from '../layout/row'
import Carousel from '../layout/carousel'

const { Title, Paragraph } = Typography

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <section id='first-screen'>
      <Carousel>
        <div className='container'>
          <div className='main-info'>
            <span className='date'>April 19-23, 2021</span>
            <br />
            <h1>
              12th ACM / SPEC International Conference on Computational
              Performance
            </h1>
            <br />
            <p>
              <b>Rennes, France</b>
            </p>
          </div>
        </div>
      </Carousel>
    </section>

    <section className='container-md'>
      <Row>
        <Col span={16}>
          <Title level={2}>Welcome!</Title>

          <Paragraph>
            The International Conference on Performance Engineering (ICPE)
            originated eleven years ago from the fusion of an ACM workshop on
            software and performance prediction and a SPEC workshop focused on
            benchmarking and performance evaluation.
          </Paragraph>

          <Paragraph>
            ICPE continues true to its origins with focus both on software
            performance modeling, prediction, and measurement as well as on
            benchmark-based performance evaluation. The areas to which such
            principles are applied have evolved over the years with the
            technological evolution in academia and industry.
          </Paragraph>

          <Paragraph>
            ICPE contributions appear at all levels of system and software
            design, performance modeling, and measurements of performance, from
            the cloud’s core to edge, from mobile devices to major data centers,
            from web applications to scientific applications.
          </Paragraph>

          <Paragraph>
            The ICPE focus on engineering performance means that industrial
            practitioners and academics that participate in ICPE are interested
            in quantifying the performance impact of all aspects of complex
            systems design and implementation. Length of design cycles,
            life-time maintenance issues, quality of experience, costs to
            delivering a system or service are also the focus of the
            intellectual curiosity of ICPE participants.
          </Paragraph>

          <Paragraph>
            In 2021 Rennes is happy to host the ICPE community for their annual
            meeting.
          </Paragraph>
        </Col>

        <Col span={6} offset={2}>
          <Title level={2}>Twitter feed</Title>

          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Col>
      </Row>
    </section>
  </Layout>
)

export default IndexPage
