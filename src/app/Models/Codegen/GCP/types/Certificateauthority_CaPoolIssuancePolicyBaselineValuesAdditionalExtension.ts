import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId,
  Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId_GetTypes,
} from "./Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId";

export interface Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension {
  // The value of this X.509 extension. A base64-encoded string.
  Value?: string;

  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  Critical?: boolean;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  ObjectId?: Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId;
}

export function Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The value of this X.509 extension. A base64-encoded string.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Critical",
      "Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ObjectId",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      Certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId_GetTypes(),
      true,
      false,
    ),
  ];
}
