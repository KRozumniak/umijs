import { Effect, Reducer } from 'umi';
import axios from 'axios';

export interface IState {}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    getBooks: Effect;
    createBook: Effect;
    deleteBook: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

// const post = (url: string, obj = {}) =>
//   axios({
//     url: `http://localhost:5000/${url}`,
//     method: 'POST',
//     data: payload,
//   }).then((res) => res.data)
//     .catch((err) => err);
//

// const callGetBooks = () => post('book/search')

const callGetBooks = () => axios({
  url: `http://localhost:5000/book/search`,
  method: 'POST',
}).then((res) => res.data)
  .catch((err) => err);

const callCreateBook = (payload: any) => axios({
  url: `http://localhost:5000/book`,
  method: 'POST',
  data: payload,
}).then((res) => res.data)
  .catch((err) => err);

const callDeleteBook = (bookId: any) => axios({
  url: `http://localhost:5000/book/${bookId}`,
  method: 'DELETE',
}).then((res) => res.data)
  .catch((err) => err);

const Model: IModel = {
  namespace: 'Book',

  state: {},

  effects: {
    *getBooks(_, { call, put }) {
      const data = yield call(callGetBooks);
      yield put({ type: 'save', payload: { list: data } });
    },
    *createBook({payload}, { call, put }) {
      yield call(callCreateBook, payload);
      yield put({ type: 'getBooks', payload });
    },
    *deleteBook({payload}, { call, put }) {
      yield call(callDeleteBook, payload);
      yield put({ type: 'getBooks', payload: payload._id });
    },
  },

  reducers: {

    save(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },

    set(state: any, { payload }: any) {
      return payload;
    },
  },
};

export default Model;
