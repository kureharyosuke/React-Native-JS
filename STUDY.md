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

#### Location.getCurrentPositionAsync(options)

사용자의 현재 위치를 1회성으로 전달하도록 요청합니다. 주어진 accuracy옵션 에 따라 특히 건물 안에 있을 때 해결하는 데 시간이 걸릴 수 있습니다.
참고: 호출하면 위치 관리자가 위치 수정을 가져오는 데 몇 초가 걸릴 수 있습니다. 빠른 응답을 기대하고 높은 정확도가 필요하지 않은 경우 Location.getLastKnownPositionAsync 사용을 고려하십시오 .

```js
🚀 ~ file: App.js ~ line 25 ~ ask ~ location Object {
"coords": Object {
"accuracy": 5,
"altitude": 0,
"altitudeAccuracy": -1,
"heading": -1,
"latitude": 37.785834,
"longitude": -122.406417,
"speed": -1,
},
"timestamp": 1638717770439.892,
}
```

```js
const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    console.log("🚀 ~ file: App.js ~ line 34 ~ ask ~ location", location);
    🚀 ~ file: App.js ~ line 34 ~ ask ~ location Array [
  Object {
    "city": "San Francisco",
    "country": "United States",
    "district": "Union Square",
    "isoCountryCode": "US",
    "name": "1 Stockton St",
    "postalCode": "94108",
    "region": "CA",
    "street": "Stockton St",
    "subregion": "San Francisco County",
    "timezone": "America/Los_Angeles",
  },
]
  };
```

```js
console.log("🚀 ~ file: App.js ~ line 35 ~ ask ~ location", location[0].city);
🚀 ~ file: App.js ~ line 35 ~ ask ~ location San Francisco
```
