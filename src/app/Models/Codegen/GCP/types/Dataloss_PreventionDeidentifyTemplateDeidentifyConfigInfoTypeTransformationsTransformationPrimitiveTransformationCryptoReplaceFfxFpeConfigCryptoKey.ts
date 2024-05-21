import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey {
  /*
Transient crypto key. Use this to have a random data crypto key generated. It will be discarded after the request finishes. Only one of this, `unwrapped` or `kms_wrapped` must be specified.
Structure is documented below.
*/
  transient?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient;

  /*
Unwrapped crypto key. Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible. Only one of this, `transient` or `kms_wrapped` must be specified.
Structure is documented below.
*/
  unwrapped?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped;

  /*
KMS wrapped key.
Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt
For more information, see [Creating a wrapped key](https://cloud.google.com/dlp/docs/create-wrapped-key). Only one of this, `transient` or `unwrapped` must be specified.
Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).
Structure is documented below.
*/
  kmsWrapped?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "transient",
      "Transient crypto key. Use this to have a random data crypto key generated. It will be discarded after the request finishes. Only one of this, `unwrapped` or `kms_wrapped` must be specified.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "unwrapped",
      "Unwrapped crypto key. Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible. Only one of this, `transient` or `kms_wrapped` must be specified.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kmsWrapped",
      "KMS wrapped key.\nInclude to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt\nFor more information, see [Creating a wrapped key](https://cloud.google.com/dlp/docs/create-wrapped-key). Only one of this, `transient` or `unwrapped` must be specified.\nNote: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped_GetTypes(),
      false,
      false,
    ),
  ];
}
