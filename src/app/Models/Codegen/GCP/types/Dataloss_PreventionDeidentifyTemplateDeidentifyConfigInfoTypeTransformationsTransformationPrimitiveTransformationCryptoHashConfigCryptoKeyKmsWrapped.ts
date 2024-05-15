import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped {
  // The resource name of the KMS CryptoKey to use for unwrapping.
  CryptoKeyName?: string;

  /*
The wrapped data crypto key.
A base64-encoded string.
*/
  WrappedKey?: string;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CryptoKeyName",
      "The resource name of the KMS CryptoKey to use for unwrapping.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WrappedKey",
      "The wrapped data crypto key.\nA base64-encoded string.",
      [],
      true,
      false,
    ),
  ];
}
