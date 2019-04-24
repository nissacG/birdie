export const hc = () =>
  fetch(`/hc`).then(response => response.json())

export const getColumns = () =>
  fetch(`/getcolumns`).then(response => response.json())

export const getColumnData = column =>
  fetch(`/getcolumndata/${column}`).then(response => response.json())
