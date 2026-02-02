export default function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return;
    }
    case "edited_message": {
      return;
    }
    case "sent_message": {
      return {};
    }
    default:
      break;
  }
}
