export function getFullName(doctor) {
  if (!doctor) return ''
  return `${doctor.sexo === 'M' ? 'Dr.' : 'Dra.'} ${doctor.apellido}, ${doctor.nombre}`
}