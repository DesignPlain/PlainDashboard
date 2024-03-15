import { CertificateTemplatePredefinedValuesAdditionalExtensionObjectId } from "./CertificateTemplatePredefinedValuesAdditionalExtensionObjectId";

export interface CertificateTemplatePredefinedValuesAdditionalExtension {
  // Required. The OID for this X.509 extension.
  ObjectId?: CertificateTemplatePredefinedValuesAdditionalExtensionObjectId;

  // Required. The value of this X.509 extension.
  Value?: string;

  // Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
  Critical?: boolean;
}
