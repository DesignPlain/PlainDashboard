import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticache_getClusterLogDeliveryConfiguration {
  //
  logType?: string;

  //
  destination?: string;

  //
  destinationType?: string;

  //
  logFormat?: string;
}

export function elasticache_getClusterLogDeliveryConfiguration_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(InputType.String, "destination", "", [], true, false),
  ];
}
