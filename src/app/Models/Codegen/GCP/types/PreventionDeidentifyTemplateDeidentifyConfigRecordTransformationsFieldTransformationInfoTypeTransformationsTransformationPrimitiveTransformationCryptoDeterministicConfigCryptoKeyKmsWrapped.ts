export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped {
  /*
The wrapped data crypto key.
A base64-encoded string.
*/
  WrappedKey?: string;

  // The resource name of the KMS CryptoKey to use for unwrapping.
  CryptoKeyName?: string;
}
