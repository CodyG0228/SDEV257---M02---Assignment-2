import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50, 
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  planetItem: {
    fontSize: 18,
    paddingVertical: 15, 
    width: '90%',   
    textAlign: 'center',
    borderBottomWidth: 1, 
    borderColor: '#ccc',
  },
  textInputContainer: {
    alignSelf: "stretch",
    marginBottom: 30,
  },

  textInputLabel: {
    marginBottom: 4,
  },

  textInput: {
    backgroundColor: "white",
    height: 20,
    fontSize: 11,
  },
  searchContainer: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    height: 40,
    paddingHorizontal: 12,
  },
});

