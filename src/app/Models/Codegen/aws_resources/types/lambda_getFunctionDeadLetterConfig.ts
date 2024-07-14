import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_getFunctionDeadLetterConfig {
  //
  targetArn?: string;
}

export function lambda_getFunctionDeadLetterConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "targetArn", "", [], true, false),
  ];
}
