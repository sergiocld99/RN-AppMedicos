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

// Sentencia para insertar la sesión en la tabla
const INSERT_SESSION = `INSERT INTO ${TABLE_NAME} (local_id, email, token) VALUES (?, ?, ?)`

// Sentencia para recuperar la sesión guardada
const SELECT_SESSION = `SELECT * FROM ${TABLE_NAME}`

// Sentencia para borrar la sesión según el id
const DELETE_SESSION = `DELETE FROM ${TABLE_NAME} WHERE local_id = ?`

// Inicialización de la base de datos local, creando la tabla si no existe
export const init = () => (
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(CREATE_TABLE, [], resolve, reject)
    })
  })
)

// Insertar una nueva sesión en la base de datos local
export const insertSession = ({localId, email, token}) => (
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(INSERT_SESSION, [localId, email, token], resolve, reject)
    })
  })
)

// Recuperar todas las sesiones guardadas en la tabla
export const getSessions = () => (
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(SELECT_SESSION, [], (_, { rows }) => {
        resolve(rows._array)
      }, reject)
    })
  })
)

// Borrar la sesión corresponde al id pasado como parámetro
export const deleteSession = ({localId}) => (
  new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(DELETE_SESSION, [localId], resolve, reject)
    })
  })
)