import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home';
import SearchScreen from './screens/Search';
import ProfileScreen from './screens/Profile';
import ShopScreen from './screens/Shop';
import ReelScreen from './screens/Reel';
import {
  Home,
  HomeFilled,
  Reel,
  ReelFilled,
  Search,
  SearchFilled,
  Shop,
  ShopFilled,
} from './Icons';

const Tab = createBottomTabNavigator();

const Screens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#262626',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerTitle: 'Anasayfa',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <HomeFilled size={30} fill={color} />
            ) : (
              <Home size={30} fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <SearchFilled size={30} fill={color} />
            ) : (
              <Search size={30} fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <ReelFilled size={30} fill={color} />
            ) : (
              <Reel size={30} fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <ShopFilled size={30} fill={color} />
            ) : (
              <Shop size={30} fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              style={[
                styles.avatar,
                {
                  borderColor: focused ? '#000' : 'transparent',
                },
              ]}
              source={{
                uri: 'https://scontent.fkya2-1.fna.fbcdn.net/v/t39.30808-6/384326399_10227833627200543_5594574090910658105_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xIk_WDkByJcAX-UPde4&_nc_ht=scontent.fkya2-1.fna&oh=00_AfBmUhurD1bu9E2lM7ACcBeBtZN4YxQfBCY8oeKZqLVPCQ&oe=6559A4BD',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Screens;
const styles = StyleSheet.create({
  avatar: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 21,
  },
});
