import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kendra_getExperienceEndpoint {
  // Endpoint of your Amazon Kendra Experience.
  endpoint?: string;

  // Type of endpoint for your Amazon Kendra Experience.
  endpointType?: string;
}

export function kendra_getExperienceEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "Endpoint of your Amazon Kendra Experience.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointType",
      "Type of endpoint for your Amazon Kendra Experience.",
      () => [],
      true,
      false,
    ),
  ];
}
