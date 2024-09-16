import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_NodePoolQueuedProvisioning {
  // Makes nodes obtainable through the [ProvisioningRequest API](https://cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest) exclusively.
  enabled?: boolean;
}

export function container_NodePoolQueuedProvisioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Makes nodes obtainable through the [ProvisioningRequest API](https://cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest) exclusively.',
      () => [],
      true,
      true,
    ),
  ];
}
