import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface signer_getSigningProfileRevocationRecord {
  //
  revokedAt?: string;

  //
  revokedBy?: string;

  //
  revocationEffectiveFrom?: string;
}

export function signer_getSigningProfileRevocationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "revokedAt",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revokedBy",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revocationEffectiveFrom",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
