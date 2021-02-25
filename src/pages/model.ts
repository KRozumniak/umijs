import { Effect, Reducer} from "umi";

export interface IState {
  count: number;
  tasks: object;
}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    plus: Effect;
    minus: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    set: Reducer<IState>;
  };
}

const Model: IModel = {
  namespace: "Count",

  state: {
    count: 0,
    tasks: [
      {id: 1, task: 'Learn HTML', isDone: false},
      {id: 2, task: 'Learn CSS', isDone: false},
      {id: 3, task: 'Learn JS', isDone: false},
    ],
  },

  effects: {
    * plus(_, { call, put }) {
      yield put({
        type: 'plusOne',
        payload: { count: 77 },
      });
    },

    * minus(_, { call, put }) {
      yield put({
        type: 'minusOne',
        payload: { count: 77 },
      });
    },
  },

  reducers: {
    plusOne(state: any, { payload }: any) {
      return {
        ...state,
        count: state.count + 1,
      };
    },

    minusOne(state: any, { payload }: any) {
      return {
        ...state,
        count: state.count - 1,
      };
    },

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
