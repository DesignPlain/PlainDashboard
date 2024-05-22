import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ses_EventDestinationCloudwatchDestination {
  // The source for the value. May be any of `"messageTag"`, `"emailHeader"` or `"linkTag"`.
  valueSource?: string;

  // The default value for the event
  defaultValue?: string;

  // The name for the dimension
  dimensionName?: string;
}

export function ses_EventDestinationCloudwatchDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "valueSource",
      'The source for the value. May be any of `"messageTag"`, `"emailHeader"` or `"linkTag"`.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultValue",
      "The default value for the event",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dimensionName",
      "The name for the dimension",
      [],
      true,
      false,
    ),
  ];
}
