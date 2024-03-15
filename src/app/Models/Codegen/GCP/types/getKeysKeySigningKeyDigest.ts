export interface getKeysKeySigningKeyDigest {
  // The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
  Digest?: string;

  // Specifies the algorithm used to calculate this digest. Possible values are `sha1`, `sha256` and `sha384`
  Type?: string;
}
