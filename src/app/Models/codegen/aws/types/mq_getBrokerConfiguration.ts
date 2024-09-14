import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mq_getBrokerConfiguration {
  //
  id?: string;

  //
  revision?: number;
}

export function mq_getBrokerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "revision", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "id", "", () => [], true, false),
  ];
}
