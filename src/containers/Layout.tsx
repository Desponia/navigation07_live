import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { IStoreState } from "../store";
import { Row, Col, Layout, Drawer } from "antd";
import { NavLinkProps } from "react-router-dom";
import { closeNotificationCenter } from "../actions";
import { Sidebar } from "../components";

const { Content } = Layout;

interface IProps {
  location?: any;
  openNotificationCenter: boolean;
  closeNotificationCenter(): void;
  children?: React.ReactNode;
}

const mapStateToProps = (state: IStoreState) => ({
  openNotificationCenter: state.openNotificationCenter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeNotificationCenter: () => dispatch(closeNotificationCenter())
});

class LayoutContainer extends React.PureComponent<IProps, NavLinkProps> {
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Drawer
          title="알림"
          placement="right"
          closable={true}
          visible={this.props.openNotificationCenter}
          onClose={() => this.props.closeNotificationCenter()}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Sidebar location={this.props.location} />
        <Layout>
          <Content style={{ backgroundColor: "#fff" }}>
            <Row
              type="flex"
              align="middle"
              style={{
                paddingTop: 5,
                paddingBottom: 10
              }}
            >
              <Col style={{ flex: 1 }}>{this.props.children}</Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export const DefaultLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer);
