import ClassRoom from './0-classroom';

export default function initializedRooms() {
  return [19, 20, 34].map((room) => new ClassRoom(room));
}
