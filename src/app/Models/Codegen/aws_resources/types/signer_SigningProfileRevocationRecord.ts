import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface signer_SigningProfileRevocationRecord {
  //
  revokedBy?: string;

  //
  revocationEffectiveFrom?: string;

  //
  revokedAt?: string;
}

export function signer_SigningProfileRevocationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "revokedBy", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "revocationEffectiveFrom",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "revokedAt", "", [], false, false),
  ];
}
