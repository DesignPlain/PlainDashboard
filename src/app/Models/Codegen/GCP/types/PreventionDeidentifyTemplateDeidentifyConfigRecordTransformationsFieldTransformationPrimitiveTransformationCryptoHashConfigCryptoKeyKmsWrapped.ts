export interface PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped {
  // The resource name of the KMS CryptoKey to use for unwrapping.
  CryptoKeyName?: string;

  /*
The wrapped data crypto key.
A base64-encoded string.
*/
  WrappedKey?: string;
}
