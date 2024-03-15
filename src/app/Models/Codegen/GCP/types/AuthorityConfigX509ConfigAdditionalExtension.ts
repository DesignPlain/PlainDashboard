import { AuthorityConfigX509ConfigAdditionalExtensionObjectId } from "./AuthorityConfigX509ConfigAdditionalExtensionObjectId";

export interface AuthorityConfigX509ConfigAdditionalExtension {
  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  Critical?: boolean;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  ObjectId?: AuthorityConfigX509ConfigAdditionalExtensionObjectId;

  // The value of this X.509 extension. A base64-encoded string.
  Value?: string;
}