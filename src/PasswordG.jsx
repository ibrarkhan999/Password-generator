import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

export default function PasswordG() {
  const [vPassword, setVPassword] = useState("");
  const [password, setPassword] = useState("");
  const [isPassGen, setIsPassGen] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassString = () => {
    const length = parseInt(vPassword);

    if (isNaN(length) || length < 4 || length > 16) {
      Alert.alert("Invalid Length", "Please enter a length between 4-16 characters");
      return;
    }

    let characterList = "";
    if (upperCase) characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCase) characterList += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characterList += "0123456789";
    if (symbols) characterList += "!@#$%^&*()_+-=|:;\"'<>,.?/";

    if (!characterList) {
      Alert.alert("No Options Selected", "Please select at least one character type");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * characterList.length);
      result += characterList.charAt(charIndex);
    }

    setPassword(result);
    setIsPassGen(true);
  };

  const resetPassword = () => {
    setPassword("");
    setIsPassGen(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
    setVPassword("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.header}>
          <Text style={styles.title}>Password Generator</Text>
          <Text style={styles.subtitle}>Create strong & secure passwords</Text>
        </View>


        <View style={styles.card}>

          <View style={styles.inputSection}>
            <Text style={styles.label}>Password Length</Text>
            <TextInput
              placeholder="4 - 16"
              placeholderTextColor="#64748b"
              keyboardType="numeric"
              value={vPassword}
              onChangeText={setVPassword}
              style={styles.input}
              maxLength={2}
            />
          </View>


          <View style={styles.optionsSection}>
            <Text style={styles.sectionTitle}>Character Types</Text>
            
            <View style={styles.checkboxWrapper}>
              <BouncyCheckbox
                isChecked={lowerCase}
                onPress={() => setLowerCase(!lowerCase)}
                text="Lowercase (a-z)"
                fillColor="#10b981"
                textStyle={styles.checkboxText}
                iconStyle={styles.iconStyle}
                innerIconStyle={styles.innerIconStyle}
              />
            </View>

            <View style={styles.checkboxWrapper}>
              <BouncyCheckbox
                isChecked={upperCase}
                onPress={() => setUpperCase(!upperCase)}
                text="Uppercase (A-Z)"
                fillColor="#3b82f6"
                textStyle={styles.checkboxText}
                iconStyle={styles.iconStyle}
                innerIconStyle={styles.innerIconStyle}
              />
            </View>

            <View style={styles.checkboxWrapper}>
              <BouncyCheckbox
                isChecked={numbers}
                onPress={() => setNumbers(!numbers)}
                text="Numbers (0-9)"
                fillColor="#f59e0b"
                textStyle={styles.checkboxText}
                iconStyle={styles.iconStyle}
                innerIconStyle={styles.innerIconStyle}
              />
            </View>

            <View style={styles.checkboxWrapper}>
              <BouncyCheckbox
                isChecked={symbols}
                onPress={() => setSymbols(!symbols)}
                text="Symbols (!@#$...)"
                fillColor="#ef4444"
                textStyle={styles.checkboxText}
                iconStyle={styles.iconStyle}
                innerIconStyle={styles.innerIconStyle}
              />
            </View>
          </View>


          <TouchableOpacity 
            style={styles.generateBtn} 
            onPress={generatePassString}
            activeOpacity={0.8}
          >
            <Text style={styles.generateBtnText}>🔐 Generate Password</Text>
          </TouchableOpacity>
        </View>


        {isPassGen && (
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>Your Password</Text>
            <View style={styles.passwordBox}>
              <Text style={styles.passwordText} selectable={true}>
                {password}
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.resetBtn} 
              onPress={resetPassword}
              activeOpacity={0.7}
            >
              <Text style={styles.resetText}>🔄 Generate New</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  container: {
    flex: 2,
    backgroundColor: "#0f172a",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
    marginTop: 10,
  },
  title: {
    color: "#f8fafc",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    fontWeight: "400",
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#334155",
  },
  inputSection: {
    marginBottom: 24,
  },
  label: {
    color: "#cbd5e1",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  input: {
    backgroundColor: "#0f172a",
    borderRadius: 12,
    padding: 16,
    color: "#f1f5f9",
    fontSize: 18,
    fontWeight: "600",
    borderWidth: 2,
    borderColor: "#334155",
  },
  optionsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#cbd5e1",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  checkboxWrapper: {
    backgroundColor: "#0f172a",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#334155",
  },
  checkboxText: {
    color: "#e2e8f0",
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "none",
  },
  iconStyle: {
    borderRadius: 8,
  },
  innerIconStyle: {
    borderRadius: 6,
  },
  generateBtn: {
    backgroundColor: "#6366f1",
    paddingVertical: 16,
    borderRadius: 14,
    shadowColor: "#6366f1",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  generateBtnText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.5,
  },
  resultCard: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 24,
    marginTop: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#334155",
  },
  resultLabel: {
    color: "#cbd5e1",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  passwordBox: {
    backgroundColor: "#0f172a",
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#10b981",
    marginBottom: 16,
  },
  passwordText: {
    color: "#10b981",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: 2,
  },
  resetBtn: {
    backgroundColor: "#f59e0b",
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: "#f59e0b",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  resetText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});