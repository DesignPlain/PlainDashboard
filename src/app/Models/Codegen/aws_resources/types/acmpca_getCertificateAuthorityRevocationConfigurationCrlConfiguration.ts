import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration {
  //
  customCname?: string;

  //
  enabled?: boolean;

  //
  expirationInDays?: number;

  //
  s3BucketName?: string;

  //
  s3ObjectAcl?: string;
}

export function acmpca_getCertificateAuthorityRevocationConfigurationCrlConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "s3BucketName", "", [], true, false),
    new DynamicUIProps(InputType.String, "s3ObjectAcl", "", [], true, false),
    new DynamicUIProps(InputType.String, "customCname", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "expirationInDays",
      "",
      [],
      true,
      false,
    ),
  ];
}
