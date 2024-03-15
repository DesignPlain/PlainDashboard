import { PolicyAlternativeNameServerConfigTargetNameServer } from "./PolicyAlternativeNameServerConfigTargetNameServer";

export interface PolicyAlternativeNameServerConfig {
  /*
Sets an alternative name server for the associated networks. When specified,
all DNS queries are forwarded to a name server that you choose. Names such as .internal
are not available when an alternative name server is specified.
Structure is documented below.
*/
  TargetNameServers?: Array<PolicyAlternativeNameServerConfigTargetNameServer>;
}
