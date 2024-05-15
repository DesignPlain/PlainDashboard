import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId,
  Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId_GetTypes,
} from "./Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId";

export interface Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension {
  // Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
  Critical?: boolean;

  // Required. The OID for this X.509 extension.
  ObjectId?: Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId;

  // Required. The value of this X.509 extension.
  Value?: string;
}

export function Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Critical",
      "Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ObjectId",
      "Required. The OID for this X.509 extension.",
      Certificateauthority_CertificateTemplatePredefinedValuesAdditionalExtensionObjectId_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Required. The value of this X.509 extension.",
      [],
      true,
      false,
    ),
  ];
}
