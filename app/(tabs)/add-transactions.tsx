import Button from '@/components/Button';
import { globalStyles } from '@/styles/globalStyles';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddTransactions() {
const initialForm = {
    description: "",
    value: 0,
    date: "",
    category: "Renda"
  }

  const [form, setForm] = useState(initialForm)

  const addTransaction = () => {
    Alert.alert(`${form.description} | ${form.value} | ${form.date} | ${form.category}`)
  }

  const handleInputChange = (name: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView style={globalStyles.content}>
        <View style={styles.form}>
          <View>
            <Text style={globalStyles.inputLabel}>Descrição</Text>
            <TextInput
              style={globalStyles.input}
              value={form.description}
              onChangeText={value => handleInputChange('description', value)}
            />
          </View>

          <View>
            <Text style={globalStyles.inputLabel}>Valor</Text>
            <TextInput
              style={globalStyles.input}
              value={form.value.toString()}
              keyboardType='numeric'
              onChangeText={value => handleInputChange('value', value)}
            />
          </View>

          <View>
            <Text style={globalStyles.inputLabel}>Data</Text>
            <TextInput
              style={globalStyles.input}
              value={form.date}
              onChangeText={value => handleInputChange('date', value)}
            />
          </View>

          <View>
            <Text style={globalStyles.inputLabel}>Categoria</Text>
            <TextInput
              style={globalStyles.input}
              value={form.category}
              onChangeText={value => handleInputChange('category', value)}
            />
          </View>
        </View>

        <Button onPress={addTransaction}>Adicionar</Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginBottom: 40,
    marginTop: 10
  }
})