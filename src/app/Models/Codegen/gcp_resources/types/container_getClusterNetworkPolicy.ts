import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterNetworkPolicy {
  // Whether network policy is enabled on the cluster.
  enabled?: boolean;

  // The selected network policy provider.
  provider?: string;
}

export function container_getClusterNetworkPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether network policy is enabled on the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "provider",
      "The selected network policy provider.",
      [],
      true,
      false,
    ),
  ];
}
