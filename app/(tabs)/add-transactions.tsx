import Button from '@/components/Button';
import CategoryPicker from '@/components/CategoryPicker';
import CurrencyInput from '@/components/CurrencyInput';
import DatePicker from '@/components/DatePicker';
import DescriptionInput from '@/components/DescriptionInput';
import { useMoney } from '@/context/GlobalState';
import { globalStyles } from '@/styles/globalStyles';
import React, { useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const initialForm = {
  description: "",
  value: 0,
  date: new Date(),
  category: "Renda"
}
export default function AddTransactions() {
  const [form, setForm] = useState(initialForm);
  const { transactions, setTransactions } = useMoney();
  const valueInputRef = useRef<TextInput>(null);

  const addTransaction = () => {
    const newTransaction = {
      id: transactions.length + 1,
      ...form
    };

    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setForm(initialForm);
  }
  return (
    <KeyboardAvoidingView style={globalStyles.screenContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={globalStyles.content}>
          <View style={styles.form}>
            <DescriptionInput form={form} setForm={setForm} valueInputRef={valueInputRef} />

            <CurrencyInput
              form={form}
              setForm={setForm}
              valueInputRef={valueInputRef}
            />

            <DatePicker
              form={form}
              setForm={setForm}
            />

            <CategoryPicker
              form={form}
              setForm={setForm}
            />
          </View>

          <Button onPress={addTransaction}>Adicionar</Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginBottom: 40,
    marginTop: 10
  }
})