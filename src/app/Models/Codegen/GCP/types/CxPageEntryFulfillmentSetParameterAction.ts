export interface CxPageEntryFulfillmentSetParameterAction {
  // Display name of the parameter.
  Parameter?: string;

  // The new JSON-encoded value of the parameter. A null value clears the parameter.
  Value?: string;
}
