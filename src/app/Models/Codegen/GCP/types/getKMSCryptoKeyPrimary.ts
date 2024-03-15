export interface getKMSCryptoKeyPrimary {
  /*
The CryptoKey's name.
A CryptoKey’s name belonging to the specified Google Cloud Platform KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`
*/
  Name?: string;

  // The current state of the CryptoKeyVersion.
  State?: string;
}
