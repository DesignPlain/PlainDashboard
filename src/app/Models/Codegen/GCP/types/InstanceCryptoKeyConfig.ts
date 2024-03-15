export interface InstanceCryptoKeyConfig {
  // The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of projects/-/locations/-/keyRings/-/cryptoKeys/-.
  KeyReference?: string;
}
