import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  InputText,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import BucketList from "./BucketList";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: [
        "영화관 가기",
        "수족관 가기",
        "놀이터 가기",
        "수영장 가기",
        "스키 배우기",
      ],
      text: [""],
      count: 5,
    };
    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.state.text);
  }

  addBucketList = () => {
    Alert.alert("메세지");
    let list = this.state.list;
    const new_item = this.state.text.current.value;
    // console.log(this.state.text);
    console.log("new_item: ", new_item);
    // 리액트에서는 concat으로 배열항목을 합쳐주는 게 좋아요. 아래처럼요!
    list = list.concat(new_item);
    this.setState({ list: list, count: this.state.count + 1 });
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    const { count } = this.state;

    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log(this.state);
    return (
      <ScrollView style={styles.App}>
        <StatusBar style="black" />
        <View style={styles.container}>
          <View style={styles.countContainer}>
            <Text>Bucket Count: {count}</Text>
          </View>
          <Text style={styles.textStyle}>내 버킷리스트</Text>
          <ScrollView style={styles.topLine}>
            <BucketList list={this.state.list} />
          </ScrollView>
          <View style={styles.textInput}>
            <TextInput
              type="text"
              ref={this.state.text}
              placeholder="추가할 버킷 입력창"
            />
            <Button onPress={this.addBucketList} title="추가하기 버튼"></Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 620,
    margin: 10,
    //영역 안의 컨텐츠 이격 공간을 뜻합니다(하단 이미지 참조)
    padding: 10,
    //테두리의 구부러짐을 결정합니다. 지금 보면 조금 둥글죠?
    borderRadius: 10,
    //테두리의 두께를 결정합니다
    borderWidth: 1,
    borderStyle: "dotted",
  },
  textStyle: {
    //글자 색을 결정합니다. rgb, 값 이름, 색상코드 모두 가능합니다
    color: "purple",
    //글자의 크기를 결정합니다
    fontSize: 30,
    //글자의 두께를 결정합니다
    fontWeight: "700",
    //가로기준으로 글자의 위치를 결정합니다
    textAlign: "center",
  },
  topLine: {
    margin: 10,
    height: 30,
    backgroundColor: "#f886a8",
  },
  textInput: {
    // height: 30,
    margin: 10,
    marginTop: 10,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#B8F2F2",
  },
  bottomLine: {
    margin: 10,
    marginTop: 10,
    height: 50,
    backgroundColor: "#eee",
  },
});
