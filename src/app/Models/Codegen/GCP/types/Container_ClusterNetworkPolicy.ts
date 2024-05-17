import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNetworkPolicy {
  // The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.
  Provider?: string;

  // Whether network policy is enabled on the cluster.
  Enabled?: boolean;
}

export function Container_ClusterNetworkPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Provider",
      "The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether network policy is enabled on the cluster.",
      [],
      true,
      false,
    ),
  ];
}
