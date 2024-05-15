import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ManagedZoneServiceDirectoryConfigNamespace,
  Dns_ManagedZoneServiceDirectoryConfigNamespace_GetTypes,
} from "./Dns_ManagedZoneServiceDirectoryConfigNamespace";

export interface Dns_ManagedZoneServiceDirectoryConfig {
  /*
The namespace associated with the zone.
Structure is documented below.
*/
  Namespace?: Dns_ManagedZoneServiceDirectoryConfigNamespace;
}

export function Dns_ManagedZoneServiceDirectoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Namespace",
      "The namespace associated with the zone.\nStructure is documented below.",
      Dns_ManagedZoneServiceDirectoryConfigNamespace_GetTypes(),
      true,
      false,
    ),
  ];
}
