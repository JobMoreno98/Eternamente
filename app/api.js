export const getTask = async (nombre) => {
  const url = new URL("task/" + nombre['nombre'],'http://148.202.134.129:3000/');
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
    const url = new URL("task/",'http://148.202.134.129:3000/');
    const result = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newTask),
    });
    return await result.json();
  };