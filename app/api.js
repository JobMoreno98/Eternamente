export const getTask = async (nombre) => {
  const url = new URL("http://192.168.100.14:3000/task/" + nombre['nombre']);
    const result = await fetch(url,{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    }).catch((error) => console.warn("fetch error:", error));
    return await result.json();
};

export const login = async (newTask) => {
    const result = await fetch("http://192.168.100.14:3000/task", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newTask),
    });
    return await result.json();
  };