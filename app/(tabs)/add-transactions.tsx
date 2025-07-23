import Button from '@/components/Button';
import { categories } from '@/constants/categories';
import { colors } from '@/constants/colors';
import { globalStyles } from '@/styles/globalStyles';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Alert, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddTransactions() {
  const initialForm = {
    description: "",
    value: 0,
    date: new Date(),
    category: "Renda"
  }

  const [form, setForm] = useState(initialForm)
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addTransaction = () => {
    Alert.alert(`${form.description} | ${form.value} | ${form.date} | ${form.category}`)
  }

  const handleInputChange = (name: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (_: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setForm(prevState => ({
        ...prevState,
        date: date
      }));
    }
  };

  const handleCurrencyChange = (value: string) => {
    const formattedValue = value.replace(/\D/g, '');
    const numberValue = formattedValue ? parseFloat(formattedValue) / 100 : 0;
    setForm(prevState => ({
      ...prevState,
      value: isNaN(numberValue) ? 0 : numberValue
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
              value={form.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
              keyboardType='numeric'
              onChangeText={handleCurrencyChange}
            />
          </View>

          <View>
            <Text style={globalStyles.inputLabel}>Data</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={globalStyles.input}
                value={form.date.toLocaleDateString('pt-BR')}
                placeholder="Selecione a data"
                editable={false}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <RNDateTimePicker
                value={new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={handleDateChange}
                accentColor='#6200ee'
              />
            )}
          </View>

          <View>
            <Text style={globalStyles.inputLabel}>Categoria</Text>
             <View style={styles.picker}>
              <Picker
                selectedValue={form.category}
                onValueChange={(value) => handleInputChange('category', value)}
              >
                <Picker.Item
                  label={categories.income.displayName}
                  value={categories.income.name}
                />
                <Picker.Item
                  label={categories.food.displayName}
                  value={categories.food.name}
                />
                <Picker.Item
                  label={categories.house.displayName}
                  value={categories.house.name}
                />
                <Picker.Item
                  label={categories.education.displayName}
                  value={categories.education.name}
                />
                <Picker.Item
                  label={categories.travel.displayName}
                  value={categories.travel.name}
                />
              </Picker>
            </View>
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
  },
  picker: {
    display: "flex",
    justifyContent: "center",
    height: 44,
    borderColor: colors.secondaryText,
    borderWidth: 1,
    borderRadius: 8,
    flexGrow: 1
  }
})