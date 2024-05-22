import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kms_getSecretSecret {
  //
  context?: Map<string, string>;

  //
  grantTokens?: Array<string>;

  //
  name?: string;

  //
  payload?: string;
}

export function kms_getSecretSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
    new DynamicUIProps(InputType.String, "payload", "", [], true, false),
    new DynamicUIProps(
      InputType.Map,
      "context",
      "",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "grantTokens",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
