import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ManagedZoneForwardingConfigTargetNameServer,
  Dns_ManagedZoneForwardingConfigTargetNameServer_GetTypes,
} from "./Dns_ManagedZoneForwardingConfigTargetNameServer";

export interface Dns_ManagedZoneForwardingConfig {
  /*
List of target name servers to forward to. Cloud DNS will
select the best available name server if more than
one target is given.
Structure is documented below.
*/
  TargetNameServers?: Array<Dns_ManagedZoneForwardingConfigTargetNameServer>;
}

export function Dns_ManagedZoneForwardingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TargetNameServers",
      "List of target name servers to forward to. Cloud DNS will\nselect the best available name server if more than\none target is given.\nStructure is documented below.",
      Dns_ManagedZoneForwardingConfigTargetNameServer_GetTypes(),
      true,
      false,
    ),
  ];
}
