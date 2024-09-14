import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage {
  // An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  objectIdPaths?: Array<number>;
}

export function certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "objectIdPaths",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.",
      () => InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
