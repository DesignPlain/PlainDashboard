import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface edgecontainer_ClusterSystemAddonsConfigIngress {
  // Ingress VIP.
  ipv4Vip?: string;

  // Whether Ingress is disabled.
  disabled?: boolean;
}

export function edgecontainer_ClusterSystemAddonsConfigIngress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ipv4Vip",
      "Ingress VIP.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "Whether Ingress is disabled.",
      [],
      false,
      false,
    ),
  ];
}
