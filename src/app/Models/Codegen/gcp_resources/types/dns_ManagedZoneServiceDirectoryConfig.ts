import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dns_ManagedZoneServiceDirectoryConfigNamespace,
  dns_ManagedZoneServiceDirectoryConfigNamespace_GetTypes,
} from "./dns_ManagedZoneServiceDirectoryConfigNamespace";

export interface dns_ManagedZoneServiceDirectoryConfig {
  /*
The namespace associated with the zone.
Structure is documented below.
*/
  namespace?: dns_ManagedZoneServiceDirectoryConfigNamespace;
}

export function dns_ManagedZoneServiceDirectoryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "namespace",
      "The namespace associated with the zone.\nStructure is documented below.",
      dns_ManagedZoneServiceDirectoryConfigNamespace_GetTypes(),
      true,
      false,
    ),
  ];
}
