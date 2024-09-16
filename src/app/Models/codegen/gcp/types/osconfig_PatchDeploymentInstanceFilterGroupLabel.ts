import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

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
      'labels',
      'Compute Engine instance labels that must be present for a VM instance to be targeted by this filter\n\n- - -',
      () => InputType_Map_GetTypes(),
      true,
      true,
    ),
  ];
}
