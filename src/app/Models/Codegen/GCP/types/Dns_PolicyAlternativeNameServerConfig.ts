import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_PolicyAlternativeNameServerConfigTargetNameServer,
  Dns_PolicyAlternativeNameServerConfigTargetNameServer_GetTypes,
} from "./Dns_PolicyAlternativeNameServerConfigTargetNameServer";

export interface Dns_PolicyAlternativeNameServerConfig {
  /*
Sets an alternative name server for the associated networks. When specified,
all DNS queries are forwarded to a name server that you choose. Names such as .internal
are not available when an alternative name server is specified.
Structure is documented below.
*/
  TargetNameServers?: Array<Dns_PolicyAlternativeNameServerConfigTargetNameServer>;
}

export function Dns_PolicyAlternativeNameServerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TargetNameServers",
      "Sets an alternative name server for the associated networks. When specified,\nall DNS queries are forwarded to a name server that you choose. Names such as .internal\nare not available when an alternative name server is specified.\nStructure is documented below.",
      Dns_PolicyAlternativeNameServerConfigTargetNameServer_GetTypes(),
      true,
      false,
    ),
  ];
}
