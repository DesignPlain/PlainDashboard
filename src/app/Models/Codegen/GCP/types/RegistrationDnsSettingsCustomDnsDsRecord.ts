export interface RegistrationDnsSettingsCustomDnsDsRecord {
  // The digest generated from the referenced DNSKEY.
  Digest?: string;

  // The hash function used to generate the digest of the referenced DNSKEY.
  DigestType?: string;

  // The key tag of the record. Must be set in range 0 -- 65535.
  KeyTag?: number;

  // The algorithm used to generate the referenced DNSKEY.
  Algorithm?: string;
}
