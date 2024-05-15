import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_PatchDeploymentInstanceFilterGroupLabel {
  /*
Compute Engine instance labels that must be present for a VM instance to be targeted by this filter

- - -
*/
  Labels?: Map<string, string>;
}

export function Osconfig_PatchDeploymentInstanceFilterGroupLabel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "Compute Engine instance labels that must be present for a VM instance to be targeted by this filter\n\n- - -",
      InputType_Map_GetTypes(),
      true,
      true,
    ),
  ];
}
