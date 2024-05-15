import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodePoolQueuedProvisioning {
  // Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API
  Enabled?: boolean;
}

export function Container_getClusterNodePoolQueuedProvisioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API",
      [],
      true,
      false,
    ),
  ];
}
