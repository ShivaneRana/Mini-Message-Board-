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
}

export const addnewMessage = (username,message,date) => {

    const tempObject = {
        user:username || "",
        text:message || "",
        date:date,
    }    

    message.push(tempObject);
}


