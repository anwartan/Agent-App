import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 2;
const SpotLight = posed.View({
    route0: { x: 0 },
    route1: { x: tabWidth },
    

});

const S = StyleSheet.create({
    container: { backgroundColor: '#182955', flexDirection: "row", height: 55, alignItems: 'center', elevation: 2 },
    tabButton: { flex: 1, justifyContent: "center", alignItems: "center" },
    spotLight: {
        top: 10,
        left: (tabWidth / 2) - 18,
        width: 35,
        height: 35,
        // height: "100%",
        backgroundColor: "#08D7C5",
        borderRadius: 20
    }
});


const TabBar = props => {
    const {
        renderIcon,
        getLabelText,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation,
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={S.container}>
            <View style={StyleSheet.absoluteFillObject}>
                <SpotLight style={S.spotLight} pose={`route${activeRouteIndex}`} />
            </View>
            {routes.map((route, routeIndex) => {
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                return (
                    <TouchableOpacity
                        key={routeIndex}
                        style={S.tabButton}
                        onPress={() => {
                            onTabPress({ route });
                        }}
                        onLongPress={() => {
                            onTabLongPress({ route });
                        }}
                        accessibilityLabel={getAccessibilityLabel({ route })}
                    >
                        {renderIcon({ route, focused: isRouteActive, tintColor })}

                        {/* <Text>{getLabelText({ route })}</Text> */}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabBar;


// reference https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-3496