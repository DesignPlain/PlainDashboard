export interface WorkstationClusterCondition {
  /*
(Output)
The status code, which should be an enum value of google.rpc.Code.
*/
  Code?: number;

  /*
(Output)
A list of messages that carry the error details.
*/
  Details?: Array<Map<string, string>>;

  /*
(Output)
Human readable message indicating details about the current status.
*/
  Message?: string;
}
