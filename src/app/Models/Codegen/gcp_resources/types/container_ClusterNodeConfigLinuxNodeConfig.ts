import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterNodeConfigLinuxNodeConfig {
  /*
Possible cgroup modes that can be used.
Accepted values are:
*/
  cgroupMode?: string;

  /*
The Linux kernel parameters to be applied to the nodes
and all pods running on the nodes. Specified as a map from the key, such as
`net.core.wmem_max`, to a string value. Currently supported attributes can be found [here](https://cloud.google.com/sdk/gcloud/reference/beta/container/node-pools/create#--system-config-from-file).
Note that validations happen all server side. All attributes are optional.
*/
  sysctls?: Map<string, string>;
}

export function container_ClusterNodeConfigLinuxNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cgroupMode",
      "Possible cgroup modes that can be used.\nAccepted values are:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "sysctls",
      "The Linux kernel parameters to be applied to the nodes\nand all pods running on the nodes. Specified as a map from the key, such as\n`net.core.wmem_max`, to a string value. Currently supported attributes can be found [here](https://cloud.google.com/sdk/gcloud/reference/beta/container/node-pools/create#--system-config-from-file).\nNote that validations happen all server side. All attributes are optional.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
