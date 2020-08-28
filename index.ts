// can't infer that the rejoined properties are of the type T that was passed in...
function mapData<T extends { referenceId: string}>(data: Omit<T, 'referenceId'>): T {
  return {
    ...data,
    referenceId: 'asd'
  };
}

// works since we are explicitly saying what the objects type is
function mapData2<T extends { referenceId: string}>(data: Omit<T, 'referenceId'>): T {
  return {
    ...data,
    referenceId: 'asd'
  } as T;
}

// This could realistically be solved with a "Base" interface of the object with no ref id & the "real" type that has the referenceId extended onto it

// This also puts the typing burden more on the data objects instead of the actual generic thing that is doing the orchestration, which is less than ideal... Especially when the create/update functions would need seperate types that are slightly less generic.
