import { SafeAreaView, StyleSheet } from 'react-native';
import { getPlatformMarginTop } from './src/utils';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import { colors } from './src/global/colors';
import store from './src/store';
import { init } from './src/databases/Local';

// Inicialización de la base de datos local
init()
  .then(() => console.log('Base de datos local inicializada correctamente'))
  .catch((error) => console.log('Error al inicializar la base de datos local:', error))

/**
 * Componente principal de la aplicación.
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: getPlatformMarginTop()
  },
});
