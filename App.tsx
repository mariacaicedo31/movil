import { useEffect, useState } from 'react';
import MapComponent from './MapComponent';
import Punto from './types/punto';
import axios from 'axios';
import {Text} from 'react-native';

const App = () => {
  // const puntos = [{"id":7,"nombre":"Panadería la Milagrosa","tipo":"parque","cx":"-76.55648970523826","cy":"3.4587255837923614","descripcion":"Venta de pan y otros","created_at":"2023-06-19T04:30:05.034Z","updated_at":"2023-06-19T04:30:05.034Z"},{"id":8,"nombre":"La manigua arte café y cultura","tipo":"parque","cx":"-76.55332429448545","cy":"3.4565805098929414","descripcion":"venta de comida","created_at":"2023-06-19T04:32:49.881Z","updated_at":"2023-06-19T04:32:49.881Z"},{"id":9,"nombre":"Bar de eduar","tipo":"bar","cx":"-76.55401096463444","cy":"3.453237054906681","descripcion":"Venta de licores","created_at":"2023-06-19T04:35:21.985Z","updated_at":"2023-06-19T04:35:21.985Z"},{"id":10,"nombre":"Go Burguer Cali","tipo":"bar","cx":"-76.55498775936226","cy":"3.454662469053791","descripcion":"Venta de comida rápida","created_at":"2023-06-19T04:37:43.245Z","updated_at":"2023-06-19T04:37:43.245Z"},{"id":11,"nombre":"Pollo Campero Peruano","tipo":"restaurante","cx":"-76.55710641864643","cy":"3.4538378495507556","descripcion":"Venta de comida","created_at":"2023-06-19T04:38:55.451Z","updated_at":"2023-06-19T04:38:55.451Z"},{"id":12,"nombre":"Boka'o Sándwich \u0026 Burguer","tipo":"restaurante","cx":"-76.55844794451791","cy":"3.453532633074866","descripcion":"Venta de comida","created_at":"2023-06-19T04:40:36.186Z","updated_at":"2023-06-19T23:06:04.352Z"},{"id":13,"nombre":"Comedor","tipo":"restaurante","cx":"-76.5678346539015","cy":"3.45363992740943","descripcion":"comida rápida","created_at":"2023-06-19T23:07:42.530Z","updated_at":"2023-06-19T23:07:42.530Z"},{"id":14,"nombre":"GLADYS","tipo":"parque","cx":"-76.55022072960283","cy":"3.4545915197583708","descripcion":"parque gladys","created_at":"2023-07-01T22:59:08.098Z","updated_at":"2023-07-01T22:59:08.098Z"},{"id":15,"nombre":"martincito","tipo":"bar","cx":"-76.56223806718775","cy":"3.4532542568580142","descripcion":"bar para cachorros","created_at":"2023-07-01T23:18:14.599Z","updated_at":"2023-07-01T23:18:14.599Z"},{"id":16,"nombre":"michis","tipo":"parque","cx":"-76.55794689949403","cy":"3.4622936460262865","descripcion":"parque del michis","created_at":"2023-07-03T03:33:33.697Z","updated_at":"2023-07-03T03:33:33.697Z"},{"id":17,"nombre":"la candida","tipo":"parque","cx":"-76.56089211235981","cy":"3.4565495197710874","descripcion":"parque candicita","created_at":"2023-07-03T03:45:02.263Z","updated_at":"2023-07-03T03:45:02.263Z"}];
  const [puntos, setPuntos] = useState<Punto[]>([]);
  useEffect(() => {
    obtenerPuntos();
  }, []);

  const obtenerPuntos = async () => {
    try {
      const response = await axios.get<Punto[]>('http://localhost:3000/puntos');
      setPuntos(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
    <MapComponent region={{ latitude: 3.450732233063142, longitude: -76.54139104082458, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} puntos={puntos} />
    <Text>
    El siguiente mapa contiene parques, bibliotecas
    y museos en Santiago de Cali, creados por el usuario en la aplicación web
    </Text>
    </>
  );
};

export default App;