export interface getInstanceGroupManagerNamedPort {
  // The name of the instance group. Either `name` or `self_link` must be provided.
  Name?: string;

  // The port number.
  Port?: number;
}
