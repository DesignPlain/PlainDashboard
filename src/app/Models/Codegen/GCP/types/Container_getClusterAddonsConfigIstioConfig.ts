import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterAddonsConfigIstioConfig {
  // The status of the Istio addon, which makes it easy to set up Istio for services in a cluster. It is disabled by default. Set disabled = false to enable.
  Disabled?: boolean;

  // The authentication type between services in Istio. Available options include AUTH_MUTUAL_TLS.
  Auth?: string;
}

export function Container_getClusterAddonsConfigIstioConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "The status of the Istio addon, which makes it easy to set up Istio for services in a cluster. It is disabled by default. Set disabled = false to enable.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Auth",
      "The authentication type between services in Istio. Available options include AUTH_MUTUAL_TLS.",
      [],
      true,
      false,
    ),
  ];
}
