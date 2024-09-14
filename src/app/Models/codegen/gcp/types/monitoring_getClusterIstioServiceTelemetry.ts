import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface monitoring_getClusterIstioServiceTelemetry {
  /*
The full name of the resource that defines this service.
Formatted as described in
https://cloud.google.com/apis/design/resource_names.
*/
  resourceName?: string;
}

export function monitoring_getClusterIstioServiceTelemetry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceName",
      "The full name of the resource that defines this service.\nFormatted as described in\nhttps://cloud.google.com/apis/design/resource_names.",
      () => [],
      true,
      false,
    ),
  ];
}
