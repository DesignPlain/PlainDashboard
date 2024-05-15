import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig {
  /*
Whether to enable control plane node auto resizing.

<a name="nested_vsphere_config"></a>The `vsphere_config` block contains:
*/
  Enabled?: boolean;
}

export function Gkeonprem_VMwareClusterControlPlaneNodeAutoResizeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      'Whether to enable control plane node auto resizing.\n\n<a name="nested_vsphere_config"></a>The `vsphere_config` block contains:',
      [],
      true,
      false,
    ),
  ];
}
