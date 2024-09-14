import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mq_getBrokerEncryptionOption {
  //
  kmsKeyId?: string;

  //
  useAwsOwnedKey?: boolean;
}

export function mq_getBrokerEncryptionOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "kmsKeyId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "useAwsOwnedKey",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
