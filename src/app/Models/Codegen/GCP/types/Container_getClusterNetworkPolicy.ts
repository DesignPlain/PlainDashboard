import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNetworkPolicy {
  // Whether network policy is enabled on the cluster.
  Enabled?: boolean;

  // The selected network policy provider.
  Provider?: string;
}

export function Container_getClusterNetworkPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether network policy is enabled on the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Provider",
      "The selected network policy provider.",
      [],
      true,
      false,
    ),
  ];
}
