import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterNodePoolQueuedProvisioning {
  // Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API
  enabled?: boolean;
}

export function container_getClusterNodePoolQueuedProvisioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API",
      [],
      true,
      false,
    ),
  ];
}
