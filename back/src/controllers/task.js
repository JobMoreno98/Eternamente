import { connect } from '../database.js'

export const getTasks = async (req, res) => {
    const conecion = await connect()
    const [row] = await conecion.query("Select * from pacientes where nombre = ?", req.params.nombre)
    if (row.length == 0) {
        res.json([[]])
    } else {
        const [obtener_historial] = await conecion.query("select orientacion,atencion_concentracion,memoria,funciones_ejecutivas,lenguaje,percepcion from historials where id_paciente = ? ORDER by id DESC LIMIT 1", row[0]['id'])
        var campos = obtener_historial[0];
        var historial = Array();
        for (var k in campos) {
            if (campos[k] != '') {
                if (campos[k].includes(',')) {
                    let c_separados = campos[k].split(",")
                    for (var i in c_separados) {
                        let [temp] = await conecion.query("select id,nombre,especializa,grado,descripcion from actividades where id = ?", c_separados[i])
                        historial.push(temp[0]);
                        //console.log(historial)
                    }
                } else {
                    historial = await conecion.query("Select id,nombre,especializa,grado,descripcion from actividades where id = ?", campos[k])
                    historial = historial[0];
                    //console.log(historial)
                }
            }
        }

        historial.forEach(function (elemento) { // recorremos el array
            for (var k in elemento) {
                if (k == "grado") {
                    if (elemento[k] == 1) {

                        elemento[k] = "Normal Alto";
                    }
                    else if (elemento[k] == 2) {
                        elemento[k] = "Normal";
                    }
                    else if (elemento[k] == 3) {
                        elemento[k] = "Moderado";
                    }
                    else {
                        elemento[k] = "Severo";
                    }
                }
            }

        })
        res.json(historial);
    }

}
export const createTask = async (req, res) => {
    const conecion = await connect()
    console.log(req.body);
    const [result] = await conecion.query("Select id from users where name = ?", [req.body.description])
    const id_doctor = result[0];
    if (id_doctor === undefined) {
        res.json([[]]);
    } else {
        const paciente = await conecion.query("Select nombre from pacientes where nombre = ? and id_doctor = ?",
            [
                req.body.title,
                id_doctor['id']
            ]
        )
        res.json(paciente);
    }


}