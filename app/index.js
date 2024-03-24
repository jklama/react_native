import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../app/constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../app/components";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent"; // Create DrawerContent component to customize your drawer

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.grey },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity>
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
