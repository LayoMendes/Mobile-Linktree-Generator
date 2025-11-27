import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Form: undefined;
  Linktree: {
    photo: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Linktree'>;

export default function LinktreeScreen({ route, navigation }: Props) {
  const { photo, whatsapp, linkedin, github, portfolio } = route.params;

  const openLink = (url: string) => Linking.openURL(url);

  return (
    <LinearGradient colors={['#888888', '#000000']} style={styles.container}>
      
      {/* ✨ Setinha de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={32} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.imageShadow}>
            <Image source={{ uri: photo || 'https://via.placeholder.com/120' }} style={styles.profileImage} />
          </View>

          <Text style={styles.name}>Seu Perfil</Text>

          <TouchableOpacity style={styles.button} onPress={() => openLink(portfolio)}>
            <Text style={styles.buttonText}>Ver Portfólio</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialCardsContainer}>
          {whatsapp ? (
            <TouchableOpacity
              style={[styles.socialCard, { backgroundColor: '#25D366' }]}
              onPress={() => openLink(`https://wa.me/${whatsapp}`)}
            >
              <Entypo name="chat" size={28} color="#fff" />
              <View style={styles.socialTextContainer}>
                <Text style={styles.socialTitle}>WhatsApp</Text>
                <Text style={styles.socialDescription}>Entre em contato comigo diretamente via WhatsApp.</Text>
              </View>
            </TouchableOpacity>
          ) : null}

          {linkedin ? (
            <TouchableOpacity
              style={[styles.socialCard, { backgroundColor: '#0077B5' }]}
              onPress={() => openLink(linkedin)}
            >
              <Entypo name="linkedin" size={28} color="#fff" />
              <View style={styles.socialTextContainer}>
                <Text style={styles.socialTitle}>LinkedIn</Text>
                <Text style={styles.socialDescription}>Conecte-se comigo no LinkedIn para networking profissional.</Text>
              </View>
            </TouchableOpacity>
          ) : null}

          {github ? (
            <TouchableOpacity
              style={[styles.socialCard, { backgroundColor: '#333' }]}
              onPress={() => openLink(github)}
            >
              <FontAwesome name="github" size={28} color="#fff" />
              <View style={styles.socialTextContainer}>
                <Text style={styles.socialTitle}>GitHub</Text>
                <Text style={styles.socialDescription}>Confira meus projetos e contribuições no GitHub.</Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: { flexGrow: 1, alignItems: 'center', paddingTop: 90, paddingBottom: 60 },

  /* 🔙 Setinha de voltar */
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },

  card: {
    width: '85%',
    backgroundColor: '#111',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 12,
    marginBottom: 40,
  },
  imageShadow: {
    width: 130,
    height: 130,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6b8eff',
    shadowOpacity: 0.9,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    elevation: 18,
    marginBottom: 18,
  },
  profileImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#6b8eff' },
  name: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  button: {
    backgroundColor: '#6b8eff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    shadowColor: '#6b8eff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  socialCardsContainer: { width: '85%', alignItems: 'center' },
  socialCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    width: '100%',
  },
  socialTextContainer: { marginLeft: 15, flex: 1 },
  socialTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  socialDescription: { color: '#e0e0e0', fontSize: 14 },
});
