import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig {
  /*
Whether to enable control plane node auto resizing.

<a name="nested_vsphere_config"></a>The `vsphere_config` block contains:
*/
  enabled?: boolean;
}

export function gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether to enable control plane node auto resizing.\n\n<a name="nested_vsphere_config"></a>The `vsphere_config` block contains:',
      () => [],
      true,
      false,
    ),
  ];
}
