import * as SQLite from 'expo-sqlite'

// Nombre de tabla
const TABLE_NAME = 'sessions'

// Apertura de la base de datos
const db = SQLite.openDatabase(`${TABLE_NAME}.db`)

// Sentencia SQL para crear la tabla
const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
  local_id TEXT PRIMARY KEY NOT NULL,
  email TEXT NOT NULL,
  token TEXT NOT NULL
)`

// Inicialización de la base de datos local, creando la tabla si no existe
export const init = () => (
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(CREATE_TABLE, [], resolve, reject)
    })
  })
)