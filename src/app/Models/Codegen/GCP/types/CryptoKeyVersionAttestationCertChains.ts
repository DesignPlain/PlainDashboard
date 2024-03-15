export interface CryptoKeyVersionAttestationCertChains {
  // Cavium certificate chain corresponding to the attestation.
  CaviumCerts?: string;

  // Google card certificate chain corresponding to the attestation.
  GoogleCardCerts?: string;

  // Google partition certificate chain corresponding to the attestation.
  GooglePartitionCerts?: string;
}
