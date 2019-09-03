import {
  LOADING_LIST,
  FAILED_LIST,
  SUCCESS_LIST,
  SUCCESS_DELETE,
  FAILED_DELETE,
  SUCCESS_ADD,
  FAILED_ADD
} from "./constant";

export const loadYoutubeList = () => (dispatch, getState, {YoutubeListService}) => {
  dispatch({
    type: LOADING_LIST
  });

  return YoutubeListService.loadList().then(payload => {
    dispatch({
      type: SUCCESS_LIST,
      payload
    })
  }).catch(payload => {
    dispatch({
      type: FAILED_LIST,
      payload
    })
  })
};

export const removeYotubeList = (ids) => (dispatch, getState, {YoutubeListService}) => {
  dispatch({
    type: LOADING_LIST,
  });

  return YoutubeListService.removeFomList(ids).then(payload => {
    dispatch({
      type: SUCCESS_DELETE,
      payload
    })
  }).catch(payload => {
    dispatch({
      type: FAILED_DELETE,
      payload
    })
  });
};

export const addYotubeList = () => (dispatch, getState, {YoutubeListService}) => {
  dispatch({
    type: LOADING_LIST
  });

  return YoutubeListService.addToList().then(payload => {
    dispatch({
      type: SUCCESS_ADD,
      payload
    })
  }).catch(payload => {
    dispatch({
      type: FAILED_ADD,
      payload
    })
  })
};