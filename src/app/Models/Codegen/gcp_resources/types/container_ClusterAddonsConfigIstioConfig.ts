import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_ClusterAddonsConfigIstioConfig {
  // The authentication type between services in Istio. Available options include `AUTH_MUTUAL_TLS`.
  auth?: string;

  /*
The status of the Istio addon, which makes it easy to set up Istio for services in a
cluster. It is disabled by default. Set `disabled = false` to enable.
*/
  disabled?: boolean;
}

export function container_ClusterAddonsConfigIstioConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "auth",
      "The authentication type between services in Istio. Available options include `AUTH_MUTUAL_TLS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "The status of the Istio addon, which makes it easy to set up Istio for services in a\ncluster. It is disabled by default. Set `disabled = false` to enable.",
      [],
      true,
      false,
    ),
  ];
}
