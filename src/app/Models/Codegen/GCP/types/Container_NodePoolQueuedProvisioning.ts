import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_NodePoolQueuedProvisioning {
  // Makes nodes obtainable through the [ProvisioningRequest API](https://cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest) exclusively.
  enabled?: boolean;
}

export function container_NodePoolQueuedProvisioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Makes nodes obtainable through the [ProvisioningRequest API](https://cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest) exclusively.",
      [],
      true,
      true,
    ),
  ];
}
