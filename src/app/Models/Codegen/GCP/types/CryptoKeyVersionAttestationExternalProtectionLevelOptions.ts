export interface CryptoKeyVersionAttestationExternalProtectionLevelOptions {
  // The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.
  EkmConnectionKeyPath?: string;

  // The URI for an external resource that this CryptoKeyVersion represents.
  ExternalKeyUri?: string;
}
