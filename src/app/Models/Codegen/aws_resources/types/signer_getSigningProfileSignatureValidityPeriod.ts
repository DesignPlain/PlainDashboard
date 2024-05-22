import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface signer_getSigningProfileSignatureValidityPeriod {
  //
  type?: string;

  //
  value?: number;
}

export function signer_getSigningProfileSignatureValidityPeriod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
    new DynamicUIProps(InputType.Number, "value", "", [], true, false),
  ];
}
