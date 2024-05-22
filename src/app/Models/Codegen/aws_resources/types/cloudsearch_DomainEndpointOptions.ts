import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudsearch_DomainEndpointOptions {
  // Enables or disables the requirement that all requests to the domain arrive over HTTPS.
  enforceHttps?: boolean;

  // The minimum required TLS version. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DomainEndpointOptions.html) for valid values.
  tlsSecurityPolicy?: string;
}

export function cloudsearch_DomainEndpointOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enforceHttps",
      "Enables or disables the requirement that all requests to the domain arrive over HTTPS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tlsSecurityPolicy",
      "The minimum required TLS version. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DomainEndpointOptions.html) for valid values.",
      [],
      false,
      false,
    ),
  ];
}
