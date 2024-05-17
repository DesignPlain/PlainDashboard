import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolNodeConfigSandboxConfig {
  /*
Which sandbox to use for pods in the node pool.
Accepted values are:

- `"gvisor"`: Pods run within a gVisor sandbox.
*/
  SandboxType?: string;
}

export function Container_ClusterNodePoolNodeConfigSandboxConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SandboxType",
      'Which sandbox to use for pods in the node pool.\nAccepted values are:\n\n* `"gvisor"`: Pods run within a gVisor sandbox.',
      [],
      true,
      false,
    ),
  ];
}
