import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mq_BrokerInstance {
  //
  consoleUrl?: string;

  //
  endpoints?: Array<string>;

  //
  ipAddress?: string;
}

export function mq_BrokerInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "consoleUrl", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "endpoints",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "ipAddress", "", [], false, false),
  ];
}
