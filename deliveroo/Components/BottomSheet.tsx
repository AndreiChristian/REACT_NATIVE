import { forwardRef, useCallback, useMemo } from "react";
import { BottomSheetModal, BottomSheetBackdrop, useBottomSheetModal } from "@gorhom/bottom-sheet"
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<BottomSheetModal>((_props, ref) => {

  const snapoints = useMemo(() => ["50%"], [])

  const { dismiss } = useBottomSheetModal()

  const renderBackDrop = useCallback((props: any) =>
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, [])

  return (
    <BottomSheetModal ref={ref} snapPoints={snapoints}
      style={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}
      overDragResistanceFactor={0} backdropComponent={renderBackDrop} >
      <View style={styles.container} >
        <View style={styles.toggle} >
          <TouchableOpacity style={styles.toggleActive} >
            <Text style={styles.activeText} >Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive} >
            <Text style={styles.inactiveText} >Pickup</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()} >
          <Text style={styles.buttonText} >Close</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  )

})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 4,
    margin: 16,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: 'bold'
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 32
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30
  },
  activeText: {
    color: "#fff",
    fontWeight: "700"
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30
  },
  inactiveText: {
    color: Colors.mediumDark,
    fontWeight: "700"
  }
})

export default BottomSheet
