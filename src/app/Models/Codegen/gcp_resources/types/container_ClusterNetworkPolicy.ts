import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterNetworkPolicy {
  // Whether network policy is enabled on the cluster.
  enabled?: boolean;

  // The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.
  provider?: string;
}

export function container_ClusterNetworkPolicy_GetTypes(): DynamicUIProps[] {
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
      "The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.",
      [],
      false,
      false,
    ),
  ];
}
