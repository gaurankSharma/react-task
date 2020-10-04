const initialState = {
  test: "initial",
  data: [
    {
      title: "Portugal",
      options: [
        {
          key: "Aasiya Jayavant",
          value: false,
        },
        {
          key: "Luvleen Lawrence",
          value: false,
        },
        {
          key: "Rey Mibourne",
          value: false,
        },
        {
          key: "Caylo Bristor",
          value: false,
        },
      ],
    },
    {
      title: "Nicargua",
      options: [
        {
          key: "Deveedaas Nandi",
          value: false,
        },
        {
          key: "Obasey Chidy",
          value: false,
        },
        {
          key: "Xenie Dolezelle",
          value: false,
        },
        {
          key: "Enzelle Dengra",
          value: false,
        },
      ],
    },
    {
      title: "MArshal Island",
      options: [
        {
          key: "Aron Almarza ",
          value: false,
        },
        {
          key: "Jalena Densia",
          value: false,
        },
        {
          key: "Lorem Ipsum",
          value: false,
        },
        {
          key: "Amer Sit Ammet",
          value: false,
        },
      ],
    },
  ],
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        test: action.payload,
      };

    case "CHANGE":
      var stateObj = JSON.parse(JSON.stringify(state.data));

      stateObj[action.payload.key]["options"][
        action.payload.index
      ].value = !state.data[action.payload.key]["options"][action.payload.index]
        .value;
      return {
        ...state,
        data: stateObj,
      };

    default:
      return {
        ...state,
      };
  }
}
