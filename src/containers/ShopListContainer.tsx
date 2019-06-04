import * as React from "react";
import { connect } from "react-redux";
import { IStoreState, IShop } from "../store";
import { requestShopList } from "../actions";
import { ShopList as ShopListComponent } from "../components";

interface IProps {
  shopList: IShop[];
  mapDispatchToProps: void;
  requestShopList: any;
}

const mapStateToProps = (state: IStoreState) => ({
  shopList: state.shopList
});

const mapDispatchToProps = dispatch => ({
  requestShopList: () => dispatch(requestShopList())
});

const ShopList: React.FC<IProps> = props => {
  // 아래처럼 적으면 componentDidmount랑 비슷한 효과
  //FC 가 없4데이트 됭ㄹ때 마다 아래 함수가 호출됨
  React.useEffect(() => {
    props.requestShopList;
  }, []); //어떤 값이 변경될 때에만 호출되게 하고 싶어. [] 는 최초 호출시에만 안에 함수를 호출쓰
  return <ShopListComponent data={props.shopList} />;
};

export const ShopListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList);
