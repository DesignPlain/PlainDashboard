export interface RuntimeAccessConfig {
  /*
The type of access mode this instance. For valid values, see
`https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#RuntimeAccessType`.
*/
  AccessType?: string;

  /*
(Output)
The proxy endpoint that is used to access the runtime.
*/
  ProxyUri?: string;

  /*
The owner of this runtime after creation. Format: `alias@example.com`.
Currently supports one owner only.
*/
  RuntimeOwner?: string;
}
