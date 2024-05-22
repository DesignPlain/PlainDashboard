import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mq_getBrokerConfiguration {
  //
  revision?: number;

  //
  id?: string;
}

export function mq_getBrokerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "revision", "", [], true, false),
    new DynamicUIProps(InputType.String, "id", "", [], true, false),
  ];
}
