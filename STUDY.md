##### View 컴포넌트

- div span

##### Text 컴포넌트

- p h1 h2 h3

/-------------------------------------------------------------------------------------------------/

##### Navition

- 이동
- expo 지원하지 않는다.

##### Status Bar

- React Native
- EXPO

/-------------------------------------------------------------------------------------------------/

#### Third Party Packages

#### EXPO Good Packages

##### expo-sms

- sms

##### AsyncStorage = localStorage

- expo 지원하지 않는다.

#### Expo SDK API

- React Native API 없으면, EXPO SDK API 찾을것.
- https://docs.expo.dev/versions/latest/

/-------------------------------------------------------------------------------------------------/

#### widht height 가 아닌 flex로 제어해야한다.

그래야, 핸드폰의 기종마다 대응할수 있다.
/-------------------------------------------------------------------------------------------------/

#### ScrollView

- horizontal: 좌우로 스크롤
- contentContainerStyle : 좌우스크롤 스타일 적용
  -- ScrollView 하는 부분에는 flex 사용하면 안된다.
- pagingEnabled
- showsHorizontalScrollIndicator={false} : 스크롤의 수를 보이지 않게 한다.
- indicatorStyle="white" : showsHorizontalScrollIndicator={true} && ios -v

##### horizontal prop

- 좌우로 스크롤

#### Dimensions

- 핸드폰 기종의 widht height 를 알수 있어서, 적용할수 있다.

#### pagingEnabled

- 우리가 스크롤을 자유롭게 하지 못하게 한다.
  -- 기준점을 잡아준다.

/-------------------------------------------------------------------------------------------------/

### expo install expo-location

const ask = async () => {
const permission = await Location.requestForegroundPermissionsAsync();
console.log("🚀 ~ file: App.js ~ line 19 ~ ask ~ permission", permission);
// 🚀 ~ file: App.js ~ line 19 ~ ask ~ permission Object {
// "canAskAgain": true,
// "expires": "never",
// "granted": true,
// "status": "granted",
// }
};
