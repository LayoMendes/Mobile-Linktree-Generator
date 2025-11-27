import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#5a5a5a', '#000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Linktree Generator</Text>


      <Text style={styles.descricao}>Seja bem vindo ao Linktree Generator! Preencha os campos abaixo e clique em gerar para gerar seu portifolio!</Text>
         <TextInput
          placeholder="Sua foto de perfil"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        <TextInput
          placeholder="Seu número do WhatsApp"
          placeholderTextColor="#ccc"
          style={styles.input}
        />



        <TextInput
          placeholder="Link do seu LinkedIn"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        <TextInput
          placeholder="Link do seu GitHub"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        <TextInput
          placeholder="Link do seu Portfólio"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
      </View>
        <Text style={styles.developed}>Developed by Layo Mendes</Text>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  developed:{
    color: "grey",
    margin: 20,
  },

  descricao:{
    color: "white",
    fontSize: 13,
    margin: 20,
  },
  content: {
    width: "85%",
    backgroundColor: "#1c1c1c",
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },

  title: {
    fontSize: 32,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#303030",
    color: "white",
    padding: 12,
    marginBottom: 14,
    borderRadius: 10,
    fontSize: 16,
  },
});
