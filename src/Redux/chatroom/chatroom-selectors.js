import { createSelector } from "reselect"

const selectChat = state => state.chat

export const selectAsyncMessege = createSelector(
    [selectChat],
    (chat) => chat.asyncMessege
)

export const selectChatList = createSelector(
    [selectChat],
    (chat) => chat.chatList
)