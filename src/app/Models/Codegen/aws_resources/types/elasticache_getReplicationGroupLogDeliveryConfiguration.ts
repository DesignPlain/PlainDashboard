import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticache_getReplicationGroupLogDeliveryConfiguration {
  //
  destination?: string;

  //
  destinationType?: string;

  //
  logFormat?: string;

  //
  logType?: string;
}

export function elasticache_getReplicationGroupLogDeliveryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "destination", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "destinationType",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "logFormat", "", [], true, false),
    new DynamicUIProps(InputType.String, "logType", "", [], true, false),
  ];
}
