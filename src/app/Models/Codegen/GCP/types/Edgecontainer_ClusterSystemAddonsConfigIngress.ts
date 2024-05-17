import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_ClusterSystemAddonsConfigIngress {
  // Whether Ingress is disabled.
  Disabled?: boolean;

  // Ingress VIP.
  Ipv4Vip?: string;
}

export function Edgecontainer_ClusterSystemAddonsConfigIngress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "Whether Ingress is disabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ipv4Vip",
      "Ingress VIP.",
      [],
      false,
      false,
    ),
  ];
}
