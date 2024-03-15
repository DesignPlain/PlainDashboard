import { CertificateConfigX509ConfigAdditionalExtensionObjectId } from "./CertificateConfigX509ConfigAdditionalExtensionObjectId";

export interface CertificateConfigX509ConfigAdditionalExtension {
  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  Critical?: boolean;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  ObjectId?: CertificateConfigX509ConfigAdditionalExtensionObjectId;

  // The value of this X.509 extension. A base64-encoded string.
  Value?: string;
}
