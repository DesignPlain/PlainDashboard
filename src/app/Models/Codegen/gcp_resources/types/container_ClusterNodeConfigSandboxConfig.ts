import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
      [],
      true,
      false,
    ),
  ];
}
