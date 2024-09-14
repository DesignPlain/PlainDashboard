import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kms_getSecretSecret {
  //
  name?: string;

  //
  payload?: string;

  //
  context?: Map<string, string>;

  //
  grantTokens?: Array<string>;
}

export function kms_getSecretSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "payload", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Map,
      "context",
      "",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "grantTokens",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
