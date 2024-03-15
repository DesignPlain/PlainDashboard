export interface ClusterControlPlaneEncryptionKmsStatus {
  /*
(Output)
The status code, which should be an enum value of google.rpc.Code.
*/
  Code?: number;

  /*
(Output)
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
*/
  Message?: string;
}
