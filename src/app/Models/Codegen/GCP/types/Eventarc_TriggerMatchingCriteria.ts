import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eventarc_TriggerMatchingCriteria {
  // Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.
  attribute?: string;

  // Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.
  operator?: string;

  /*
Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

- - -
*/
  value?: string;
}

export function eventarc_TriggerMatchingCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.\n\n- - -",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "attribute",
      "Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operator",
      "Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.",
      [],
      false,
      false,
    ),
  ];
}
