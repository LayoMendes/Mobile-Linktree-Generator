import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Form: undefined;
  Linktree: {
    nome: string;
    photo: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
};

type FormScreenProp = NativeStackNavigationProp<RootStackParamList, 'Form'>;

export default function FormScreen() {
  const navigation = useNavigation<FormScreenProp>();

  // Estados para cada input
  const [photo, setPhoto] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [nome, setNome] = useState('');


  const handlePress = () => {
    // Navega para LinktreeScreen enviando os dados preenchidos
    navigation.navigate('Linktree', {
      nome,
      photo,
      whatsapp,
      linkedin,
      github,
      portfolio,
    });
  };

  return (
    <LinearGradient
      colors={['#5a5a5a', '#000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Linktree Generator</Text>

        <Text style={styles.descricao}>
          Seja bem vindo ao Linktree Generator! Preencha os campos abaixo e clique em gerar para gerar seu portifolio!
        </Text>

        
        <TextInput
          placeholder="Seu nome"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />


        <TextInput
          placeholder="Sua foto de perfil"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={photo}
          onChangeText={setPhoto}
        />

        <TextInput
          placeholder="Seu número do WhatsApp"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={whatsapp}
          onChangeText={setWhatsapp}
        />

        <TextInput
          placeholder="Link do seu LinkedIn"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={linkedin}
          onChangeText={setLinkedin}
        />

        <TextInput
          placeholder="Link do seu GitHub"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={github}
          onChangeText={setGithub}
        />

        <TextInput
          placeholder="Link do seu Portfólio"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={portfolio}
          onChangeText={setPortfolio}
        />

        {/* 🚀 Botão Criar Linktree */}
        <Pressable
          style={({ pressed }) => [styles.buttonWrapper, pressed && { opacity: 0.85 }]}
          onPress={handlePress}
        >
          <LinearGradient
            colors={['#8b0000', '#4b0000']}  // vermelho escuro → vinho escuro
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Criar Linktree</Text>
          </LinearGradient>
        </Pressable>
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

  developed: {
    color: "grey",
    margin: 20,
  },

  descricao: {
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

  buttonWrapper: {
    marginTop: 10,
    borderRadius: 12,
    shadowColor: '#680000ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 12,
  },

  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
