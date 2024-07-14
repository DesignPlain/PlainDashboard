import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface signer_SigningJobRevocationRecord {
  //
  reason?: string;

  //
  revokedAt?: string;

  //
  revokedBy?: string;
}

export function signer_SigningJobRevocationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "reason", "", [], false, false),
    new DynamicUIProps(InputType.String, "revokedAt", "", [], false, false),
    new DynamicUIProps(InputType.String, "revokedBy", "", [], false, false),
  ];
}
