export interface ConfigBlockingFunctionsTrigger {
  // The identifier for this object. Format specified above.
  EventType?: string;

  // HTTP URI trigger for the Cloud Function.
  FunctionUri?: string;

  /*
(Output)
When the trigger was changed.
*/
  UpdateTime?: string;
}
