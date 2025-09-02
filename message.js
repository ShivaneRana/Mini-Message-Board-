const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export const getAllMessage = () => {
  return [...messages];
};

export const addNewMessage = (username, message, date) => {
  const tempObject = {
    user: username || "",
    text: message || "",
    added: date,
  };

  messages.push(tempObject);
};
