export interface AttestorAttestationAuthorityNotePublicKeyPkixPublicKey {
  /*
A PEM-encoded public key, as described in
`https://tools.ietf.org/html/rfc7468#section-13`
*/
  PublicKeyPem?: string;

  /*
The signature algorithm used to verify a message against
a signature using this key. These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key).

- - -
*/
  SignatureAlgorithm?: string;
}
