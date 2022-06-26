// Interface to defining our object of response functions
export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
  // Interface to define our Todo model on the frontend
  export interface Todo {
    _id?: number
    item: string
    completed: boolean
  }

  export interface Fail {
    _id? : number
    summary : string,
    occurrenceTime: Date,
    resolvedTime: Date,
    timeLine : string,
    failureReason : string,
    damage : string,
    resolveSolution : string,
    preventionSolution : string,
    lesson : string,
  }