import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,

  },
  image: {
    width: "100%",
    aspectRatio: 5/3,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7
  }
});
