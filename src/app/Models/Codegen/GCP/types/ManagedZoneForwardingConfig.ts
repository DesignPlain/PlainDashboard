import { ManagedZoneForwardingConfigTargetNameServer } from "./ManagedZoneForwardingConfigTargetNameServer";

export interface ManagedZoneForwardingConfig {
  /*
List of target name servers to forward to. Cloud DNS will
select the best available name server if more than
one target is given.
Structure is documented below.
*/
  TargetNameServers?: Array<ManagedZoneForwardingConfigTargetNameServer>;
}
