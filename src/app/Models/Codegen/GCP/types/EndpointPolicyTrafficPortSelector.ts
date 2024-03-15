export interface EndpointPolicyTrafficPortSelector {
  // List of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or - to specify all ports. If the list is empty, all ports are selected.
  Ports?: Array<string>;
}
