export interface RestorePlanRestoreConfigTransformationRuleFieldAction {
  /*
A string containing a JSON Pointer value that references the
location in the target document to move the value from.
*/
  FromPath?: string;

  /*
Specifies the operation to perform.
Possible values are: `REMOVE`, `MOVE`, `COPY`, `ADD`, `TEST`, `REPLACE`.
*/
  Op?: string;

  /*
A string containing a JSON-Pointer value that references a
location within the target document where the operation is performed.
*/
  Path?: string;

  /*
A string that specifies the desired value in string format
to use for transformation.

- - -
*/
  Value?: string;
}
