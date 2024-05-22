import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kendra_ExperienceEndpoint {
  // The endpoint of your Amazon Kendra experience.
  endpoint?: string;

  // The type of endpoint for your Amazon Kendra experience.
  endpointType?: string;
}

export function kendra_ExperienceEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "The endpoint of your Amazon Kendra experience.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpointType",
      "The type of endpoint for your Amazon Kendra experience.",
      [],
      false,
      false,
    ),
  ];
}
