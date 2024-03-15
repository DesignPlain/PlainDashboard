export interface RoutineRemoteFunctionOptions {
  /*
Endpoint of the user-provided remote service, e.g.
`https://us-east1-my_gcf_project.cloudfunctions.net/remote_add`
*/
  Endpoint?: string;

  /*
Max number of rows in each batch sent to the remote service. If absent or if 0,
BigQuery dynamically decides the number of rows in a batch.
*/
  MaxBatchingRows?: string;

  /*
User-defined context as a set of key/value pairs, which will be sent as function
invocation context together with batched arguments in the requests to the remote
service. The total number of bytes of keys and values must be less than 8KB.
An object containing a list of "key": value pairs. Example:
`{ "name": "wrench", "mass": "1.3kg", "count": "3" }`.
*/
  UserDefinedContext?: Map<string, string>;

  /*
Fully qualified name of the user-provided connection object which holds
the authentication information to send requests to the remote service.
Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"
*/
  Connection?: string;
}
