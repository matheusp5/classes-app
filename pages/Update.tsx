import React, {useState} from "react"
import { Text, View, TextInput, StyleSheet, Alert, ScrollView } from "react-native"
import Days from "./utils/Days"
import { TouchableOpacity } from "react-native-gesture-handler";
import updateClassForDay from "./functions/updateClassesForDay";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addClass: {
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6
  }
});

export default function Update({navigation, route}: any) {
  const {classes, day} = route.params
  const [allClasses, setClasses] = useState<string[]>(classes);
  const dayName: string = Days[day]

  const handleClassChange = (index: number, value: string) => {
    const updatedClasses = [...allClasses];
    updatedClasses[index] = value;
    setClasses(updatedClasses);
  };

  const handleAddClass = () => {
    setClasses([...allClasses, '']);
  };

  const handleRemoveClass = (index: number) => {
    const updatedClasses = [...allClasses];
    updatedClasses.splice(index, 1);
    setClasses(updatedClasses);
  };

  const handleSaveChanges = () => {
    updateClassForDay(day, allClasses).then(res => {
      if(res.status == "success") {
        Alert.alert("Sucesso!", "As aulas foram atualizadas com sucesso.")
        navigation.push("Início")
      } else {
        Alert.alert("Ocorreu um erro!", "Ocorreu um erro durante o salvamento. Tente novamente mais tarde 😭")
      }
    }).catch((e) => Alert.alert("Ocorreu um erro!", "Ocorreu um erro durante o salvamento. Tente novamente mais tarde 😭"))
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Editar Aulas - {dayName}</Text>
      {allClasses.map((className: string, i: number) => (
        <View key={i} style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={className}
            onChangeText={(e) => handleClassChange(i, e)}
          />
          <TouchableOpacity onPress={() => handleRemoveClass(i)}><Text>Remover</Text></TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.addClass} onPress={handleAddClass}><Text style={{textAlign: 'center'}}>Adicionar Aula</Text></TouchableOpacity>
      <TouchableOpacity style={styles.addClass} onPress={handleSaveChanges}><Text style={{textAlign: 'center'}}>Salvar Alterações</Text></TouchableOpacity>
    </ScrollView>
  )
}