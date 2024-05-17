import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Iam_getWorkloadIdentityPoolProviderSaml {
  // SAML Identity provider configuration metadata xml doc.
  IdpMetadataXml?: string;
}

export function Iam_getWorkloadIdentityPoolProviderSaml_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IdpMetadataXml",
      "SAML Identity provider configuration metadata xml doc.",
      [],
      true,
      false,
    ),
  ];
}
