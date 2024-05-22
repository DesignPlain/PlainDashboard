import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_getEndpointElasticsearchSetting {
  //
  fullLoadErrorPercentage?: number;

  //
  serviceAccessRoleArn?: string;

  //
  endpointUri?: string;

  //
  errorRetryDuration?: number;
}

export function dms_getEndpointElasticsearchSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "fullLoadErrorPercentage",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccessRoleArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "endpointUri", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "errorRetryDuration",
      "",
      [],
      true,
      false,
    ),
  ];
}
