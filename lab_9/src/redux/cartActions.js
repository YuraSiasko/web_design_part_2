export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addItem = (clip) => ({
    type: ADD_ITEM,
    payload: clip, 
});

export const removeItem = (clipId) => ({
    type: REMOVE_ITEM,
    payload: clipId,
});

export const updateQuantity = (clipId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { id: clipId, quantity },
});