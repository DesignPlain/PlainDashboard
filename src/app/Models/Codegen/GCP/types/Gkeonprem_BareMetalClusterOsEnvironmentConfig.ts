import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterOsEnvironmentConfig {
  /*
Whether the package repo should not be included when initializing
bare metal machines.
*/
  PackageRepoExcluded?: boolean;
}

export function Gkeonprem_BareMetalClusterOsEnvironmentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "PackageRepoExcluded",
      "Whether the package repo should not be included when initializing\nbare metal machines.",
      [],
      true,
      false,
    ),
  ];
}
