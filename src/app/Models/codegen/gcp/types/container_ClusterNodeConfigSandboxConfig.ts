import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterNodeConfigSandboxConfig {
  /*
Which sandbox to use for pods in the node pool.
Accepted values are:

- `"gvisor"`: Pods run within a gVisor sandbox.
*/
  sandboxType?: string;
}

export function container_ClusterNodeConfigSandboxConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sandboxType",
      'Which sandbox to use for pods in the node pool.\nAccepted values are:\n\n* `"gvisor"`: Pods run within a gVisor sandbox.',
      () => [],
      true,
      false,
    ),
  ];
}
