export interface CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage {
  // The key may be used to sign certificates.
  CertSign?: boolean;

  // The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  ContentCommitment?: boolean;

  // The key may be used sign certificate revocation lists.
  CrlSign?: boolean;

  // The key may be used to encipher data.
  DataEncipherment?: boolean;

  // The key may be used to decipher only.
  DecipherOnly?: boolean;

  // The key may be used for digital signatures.
  DigitalSignature?: boolean;

  // The key may be used to encipher only.
  EncipherOnly?: boolean;

  // The key may be used in a key agreement protocol.
  KeyAgreement?: boolean;

  // The key may be used to encipher other keys.
  KeyEncipherment?: boolean;
}
