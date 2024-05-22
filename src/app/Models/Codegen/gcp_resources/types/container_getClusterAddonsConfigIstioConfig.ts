import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterAddonsConfigIstioConfig {
  // The authentication type between services in Istio. Available options include AUTH_MUTUAL_TLS.
  auth?: string;

  // The status of the Istio addon, which makes it easy to set up Istio for services in a cluster. It is disabled by default. Set disabled = false to enable.
  disabled?: boolean;
}

export function container_getClusterAddonsConfigIstioConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "auth",
      "The authentication type between services in Istio. Available options include AUTH_MUTUAL_TLS.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "The status of the Istio addon, which makes it easy to set up Istio for services in a cluster. It is disabled by default. Set disabled = false to enable.",
      [],
      true,
      false,
    ),
  ];
}
