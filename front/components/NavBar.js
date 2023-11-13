import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Historias } from '../pages/Historias';
import { MyAccount } from '../pages/MyAccount';

const MyAccountRoute = () => <MyAccount/>;

const LibraryRoute = () => <Historias/>;

const LessonsRoute = () => <Text>Recents</Text>;

const AwardsRoute = () => <Text>Notifications</Text>;

const NavBar = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'myAccount', title: 'MyAccount', focusedIcon: 'account', unfocusedIcon: 'account-outline'},
    { key: 'library', title: 'Stories', focusedIcon: 'book-open-page-variant', unfocusedIcon: "book-open-page-variant-outline" },
    { key: 'lessons', title: 'Lessons', focusedIcon: 'school', unfocusedIcon: "school-outline"},
    { key: 'awards', title: 'Awards', focusedIcon: 'medal', unfocusedIcon: 'medal-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    myAccount: MyAccountRoute,
    library: LibraryRoute,
    lessons: LessonsRoute,
    awards: AwardsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavBar;