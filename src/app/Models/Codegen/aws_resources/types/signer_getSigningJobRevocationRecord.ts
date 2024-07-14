import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface signer_getSigningJobRevocationRecord {
  //
  reason?: string;

  //
  revokedAt?: string;

  //
  revokedBy?: string;
}

export function signer_getSigningJobRevocationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "reason", "", [], true, false),
    new DynamicUIProps(InputType.String, "revokedAt", "", [], true, false),
    new DynamicUIProps(InputType.String, "revokedBy", "", [], true, false),
  ];
}
