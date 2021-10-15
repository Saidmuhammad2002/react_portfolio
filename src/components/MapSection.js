import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default function MapSection() {
  return (
    <YMaps>
      <div style={{ opacity: '0.7' }}>
        <Map
          defaultState={{
            center: [41.342292, 69.286826],
            zoom: 11,
          }}
          width="100%"
          height="30rem"
        >
          <Placemark geometry={[41.342292, 69.286826]} />
        </Map>
      </div>
    </YMaps>
  );
}
