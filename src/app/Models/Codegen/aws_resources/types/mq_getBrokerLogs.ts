import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface mq_getBrokerLogs {
  //
  audit?: boolean;

  //
  general?: boolean;
}

export function mq_getBrokerLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "audit", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "general", "", [], true, false),
  ];
}
