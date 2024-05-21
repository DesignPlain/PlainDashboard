import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_PatchDeploymentInstanceFilterGroupLabel {
  /*
Compute Engine instance labels that must be present for a VM instance to be targeted by this filter

- - -
*/
  labels?: Map<string, string>;
}

export function osconfig_PatchDeploymentInstanceFilterGroupLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Compute Engine instance labels that must be present for a VM instance to be targeted by this filter\n\n- - -",
      InputType_Map_GetTypes(),
      true,
      true,
    ),
  ];
}
