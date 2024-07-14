import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration {
  //
  ocspCustomCname?: string;

  //
  enabled?: boolean;
}

export function acmpca_getCertificateAuthorityRevocationConfigurationOcspConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ocspCustomCname",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
  ];
}
