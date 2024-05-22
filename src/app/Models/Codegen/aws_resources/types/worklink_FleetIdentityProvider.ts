import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface worklink_FleetIdentityProvider {
  // The SAML metadata document provided by the customer’s identity provider.
  samlMetadata?: string;

  // The type of identity provider.
  type?: string;
}

export function worklink_FleetIdentityProvider_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "samlMetadata",
      "The SAML metadata document provided by the customer’s identity provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of identity provider.",
      [],
      true,
      false,
    ),
  ];
}
