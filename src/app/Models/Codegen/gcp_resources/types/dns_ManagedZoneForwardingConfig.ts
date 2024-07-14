import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dns_ManagedZoneForwardingConfigTargetNameServer,
  dns_ManagedZoneForwardingConfigTargetNameServer_GetTypes,
} from "./dns_ManagedZoneForwardingConfigTargetNameServer";

export interface dns_ManagedZoneForwardingConfig {
  /*
List of target name servers to forward to. Cloud DNS will
select the best available name server if more than
one target is given.
Structure is documented below.
*/
  targetNameServers?: Array<dns_ManagedZoneForwardingConfigTargetNameServer>;
}

export function dns_ManagedZoneForwardingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targetNameServers",
      "List of target name servers to forward to. Cloud DNS will\nselect the best available name server if more than\none target is given.\nStructure is documented below.",
      dns_ManagedZoneForwardingConfigTargetNameServer_GetTypes(),
      true,
      false,
    ),
  ];
}
