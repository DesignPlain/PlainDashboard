import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface mq_getBrokerEncryptionOption {
  //
  useAwsOwnedKey?: boolean;

  //
  kmsKeyId?: string;
}

export function mq_getBrokerEncryptionOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "useAwsOwnedKey", "", [], true, false),
    new DynamicUIProps(InputType.String, "kmsKeyId", "", [], true, false),
  ];
}
