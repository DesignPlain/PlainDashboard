import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion {
  //
  name?: string;
}

export function mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "name", "", [], true, false)];
}
