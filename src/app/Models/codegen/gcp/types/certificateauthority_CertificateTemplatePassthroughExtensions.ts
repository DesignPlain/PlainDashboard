import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension,
  certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension_GetTypes,
} from "./certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension";

export interface certificateauthority_CertificateTemplatePassthroughExtensions {
  // Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions.
  additionalExtensions?: Array<certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension>;

  // Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.
  knownExtensions?: Array<string>;
}

export function certificateauthority_CertificateTemplatePassthroughExtensions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "additionalExtensions",
      "Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions.",
      () =>
        certificateauthority_CertificateTemplatePassthroughExtensionsAdditionalExtension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "knownExtensions",
      "Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
