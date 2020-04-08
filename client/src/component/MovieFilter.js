import React from 'react';
import '../css/MovieFilter.css';
import { Drawer, Button, Form, Space, Radio, Input, Row, Col, Typography } from 'antd';

class MovieFilter extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { yearRadio: {}, ratingRadio: {} };

        // this.title = React.createRef();

        // this.yearBeforeRadio = React.createRef();
        // this.yearBefore = React.createRef();
        // this.yearAfterRadio = React.createRef();
        // this.yearAfter = React.createRef();
        // this.yearBetweenRadio = React.createRef();
        // this.yearMin = React.createRef();
        // this.yearMax = React.createRef();

        // this.ratingBelowRadio = React.createRef();
        // this.ratingBelow = React.createRef();
        // this.ratingAboveRadio = React.createRef();
        // this.ratingAbove = React.createRef();
        // this.ratingBetweenRadio = React.createRef();
        // this.ratingMin = React.createRef();
        // this.ratingMax = React.createRef();
    }

    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    filterRating = () => { this.props.filterRating(this.props.movieList); }
    filterYear = () => { this.props.filterYear(this.props.movieList); }
    filterTitle = () => { this.props.filterTitle(this.props.movieList); }

    onFinish = (values) => {
        // e.preventDefault();

        // let titleValue = "";
        // let minYear = "";
        // let maxYear = "";
        // let minRating = "";
        // let maxRating = "";

        // if (this.title.current.value !== "") {
        //     titleValue = `${this.title.value}`;
        //     console.log("has title");
        // }

        // if (this.state.yearRadio === "yearBefore") {
        //     maxYear = this.yearBefore.current.value;
        // }
        // else if (this.state.yearRadio === "yearAfter") {
        //     minYear = this.yearAfter.current.value;
        // }
        // else if (this.state.yearRadio === "yearBetween") {
        //     minYear = this.yearMin.current.value;
        //     maxYear = this.yearMax.current.value;
        // }

        // if (this.state.ratingRadio === "ratingBelow") {
        //     maxRating = this.ratingBelow.current.value;
        // }
        // else if (this.state.ratingRadio === "ratingAbove") {
        //     minRating = this.ratingAbove.current.value;
        // }
        // else if (this.state.ratingRadio === "ratingBetween") {
        //     minRating = this.ratingMin.current.value;
        //     maxRating = this.ratingMax.current.value;
        // }

        console.log(values);
        // this.props.filterMovie(titleValue, minYear, maxYear, minRating, maxRating);
    }

    done = values => {
        console.log(values);
    }

    onFinishFailed = errorInfo => {
        console.log(errorInfo);

    }

    render() {
        const { Title } = Typography;
        return (
            <div>
                <Button onClick={this.showDrawer} id="filterBtn">Filters</Button>
                <Drawer
                    title="Movie Filter"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width="medium"
                    closable
                >
                    <Space>
                        <Button onClick={this.filterTitle}>By Title</Button>
                        <Button onClick={this.filterYear}>By Year</Button>
                        <Button onClick={this.filterRating}>By Rating</Button>
                    </Space>

                    <Form onFinish={this.done} onFinishFailed={this.onFinishFailed} name="filter-form" id="filterForm">
                        <Form.Item
                            name="title"
                            label="Title"
                        >
                            <Input label="Title" name="title" />
                        </Form.Item>

                        <Title level={4}>Year</Title>
                        <Row gutter={[8, 8]}>
                            <Col span={5}>Between: </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="yearBefore">
                                    <Input label="beforeNum" name="beforeNum" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="yearAfter">
                                    <Input label="afterNum" name="afterNum" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Title level={4}>Rating</Title>
                        <Row gutter={[8, 8]}>
                            <Col span={5}>Between: </Col>
                            <Col span={8}>
                                <Form.Item
                                        name="rateBefore">
                                    <Input label="minRating" name="minRating" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                            name="rateAfter">
                                    <Input label="maxRating" name="maxRating" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Space>
                            <Button type="primary" htmlType="submit">Filter</Button>
                            <Button type="primary" onClick={this.props.clearFilter}>Clear</Button>
                        </Space>
                    </Form>
                </Drawer>
            </div >
        );
    }

    consoleYear = (e) => { this.setState({ yearRadio: e.target.name }); }

    consoleRating = (e) => { this.setState({ ratingRadio: e.target.name }); }

}

export default MovieFilter;