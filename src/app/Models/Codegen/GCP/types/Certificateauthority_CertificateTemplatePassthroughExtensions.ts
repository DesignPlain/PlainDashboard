import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension,
  Certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension_GetTypes,
} from "./Certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension";

export interface Certificateauthority_CertificateTemplatePassthroughExtensions {
  // Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions.
  AdditionalExtensions?: Array<Certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension>;

  // Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.
  KnownExtensions?: Array<string>;
}

export function Certificateauthority_CertificateTemplatePassthroughExtensions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "KnownExtensions",
      "Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalExtensions",
      "Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions.",
      Certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension_GetTypes(),
      false,
      false,
    ),
  ];
}
