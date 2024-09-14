import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_BareMetalClusterOsEnvironmentConfig {
  /*
Whether the package repo should not be included when initializing
bare metal machines.
*/
  packageRepoExcluded?: boolean;
}

export function gkeonprem_BareMetalClusterOsEnvironmentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "packageRepoExcluded",
      "Whether the package repo should not be included when initializing\nbare metal machines.",
      () => [],
      true,
      false,
    ),
  ];
}
