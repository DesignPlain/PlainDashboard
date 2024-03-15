export interface EdgeCacheKeysetPublicKey {
  /*
The ID of the public key. The ID must be 1-63 characters long, and comply with RFC1035.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]-
which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.
*/
  Id?: string;

  // Set to true to have the CDN automatically manage this public key value.
  Managed?: boolean;

  /*
The base64-encoded value of the Ed25519 public key. The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
Representations or encodings of the public key other than this will be rejected with an error.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Value?: string;
}
