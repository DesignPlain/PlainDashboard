import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface finspace_KxClusterCapacityConfiguration {
  // Number of instances running in a cluster. Must be at least 1 and at most 5.
  nodeCount?: number;

  /*
Determines the hardware of the host computer used for your cluster instance. Each node type offers different memory and storage capabilities. Choose a node type based on the requirements of the application or software that you plan to run on your instance.

You can only specify one of the following values:
- kx.s.large – The node type with a configuration of 12 GiB memory and 2 vCPUs.
- kx.s.xlarge – The node type with a configuration of 27 GiB memory and 4 vCPUs.
- kx.s.2xlarge – The node type with a configuration of 54 GiB memory and 8 vCPUs.
- kx.s.4xlarge – The node type with a configuration of 108 GiB memory and 16 vCPUs.
- kx.s.8xlarge – The node type with a configuration of 216 GiB memory and 32 vCPUs.
- kx.s.16xlarge – The node type with a configuration of 432 GiB memory and 64 vCPUs.
- kx.s.32xlarge – The node type with a configuration of 864 GiB memory and 128 vCPUs.
*/
  nodeType?: string;
}

export function finspace_KxClusterCapacityConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "nodeCount",
      "Number of instances running in a cluster. Must be at least 1 and at most 5.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "nodeType",
      "Determines the hardware of the host computer used for your cluster instance. Each node type offers different memory and storage capabilities. Choose a node type based on the requirements of the application or software that you plan to run on your instance.\n\nYou can only specify one of the following values:\n* kx.s.large – The node type with a configuration of 12 GiB memory and 2 vCPUs.\n* kx.s.xlarge – The node type with a configuration of 27 GiB memory and 4 vCPUs.\n* kx.s.2xlarge – The node type with a configuration of 54 GiB memory and 8 vCPUs.\n* kx.s.4xlarge – The node type with a configuration of 108 GiB memory and 16 vCPUs.\n* kx.s.8xlarge – The node type with a configuration of 216 GiB memory and 32 vCPUs.\n* kx.s.16xlarge – The node type with a configuration of 432 GiB memory and 64 vCPUs.\n* kx.s.32xlarge – The node type with a configuration of 864 GiB memory and 128 vCPUs.",
      () => [],
      true,
      true,
    ),
  ];
}
