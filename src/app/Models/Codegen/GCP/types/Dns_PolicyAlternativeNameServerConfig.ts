import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dns_PolicyAlternativeNameServerConfigTargetNameServer,
  dns_PolicyAlternativeNameServerConfigTargetNameServer_GetTypes,
} from "./dns_PolicyAlternativeNameServerConfigTargetNameServer";

export interface dns_PolicyAlternativeNameServerConfig {
  /*
Sets an alternative name server for the associated networks. When specified,
all DNS queries are forwarded to a name server that you choose. Names such as .internal
are not available when an alternative name server is specified.
Structure is documented below.
*/
  targetNameServers?: Array<dns_PolicyAlternativeNameServerConfigTargetNameServer>;
}

export function dns_PolicyAlternativeNameServerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targetNameServers",
      "Sets an alternative name server for the associated networks. When specified,\nall DNS queries are forwarded to a name server that you choose. Names such as .internal\nare not available when an alternative name server is specified.\nStructure is documented below.",
      dns_PolicyAlternativeNameServerConfigTargetNameServer_GetTypes(),
      true,
      false,
    ),
  ];
}
