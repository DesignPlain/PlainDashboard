import { CertificateTemplatePassthroughExtensionsAdditionalExtension } from "./CertificateTemplatePassthroughExtensionsAdditionalExtension";

export interface CertificateTemplatePassthroughExtensions {
  // Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.
  KnownExtensions?: Array<string>;

  // Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions.
  AdditionalExtensions?: Array<CertificateTemplatePassthroughExtensionsAdditionalExtension>;
}
