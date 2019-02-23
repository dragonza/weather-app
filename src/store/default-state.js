/* eslint-disable */
import { fromJS } from "immutable";
export default fromJS({
  weather: {
    forecast: {
      byIds: [],
      forecastMap: {},
      location: {}
    },
    loading: false,
    error: false
  }
});

//
// kanban: {
//   noteList: {
//     '0': {
//       id: '0',
//         task: 'Learn React'
//     },
//     '1': {
//       id: '1',
//         task: 'Writing'
//     }
//   },
//   laneList: {
//     '0': {
//       id: '0',
//         notes: ['0'],
//         name: 'First column'
//     },
//     '1': {
//       id: '1',
//         notes: ['1'],
//         name: 'Second column'
//     }
//   }
// }
