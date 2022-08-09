export interface ResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export interface Todo {
  _id?: number
  item: string
  completed: boolean
}

export interface Fail {
  _id?: number
  summary: string
  occurrenceTime: Date
  resolvedTime: Date
  timeLine: string
  failureReason: string
  damage: string
  resolveSolution: string
  preventionSolution: string
  lesson: string
}
