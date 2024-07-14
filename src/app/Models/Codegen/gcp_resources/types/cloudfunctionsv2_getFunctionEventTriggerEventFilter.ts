import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfunctionsv2_getFunctionEventTriggerEventFilter {
  /*
'Required. The name of a CloudEvents attribute.
Currently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.
Do not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.
*/
  attribute?: string;

  /*
Optional. The operator used for matching the events with the value of
the filter. If not specified, only events that have an exact key-value
pair specified in the filter are matched.
The only allowed value is 'match-path-pattern'.
[See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'
*/
  operator?: string;

  /*
Required. The value for the attribute.
If the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.
*/
  value?: string;
}

export function cloudfunctionsv2_getFunctionEventTriggerEventFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "attribute",
      "'Required. The name of a CloudEvents attribute.\nCurrently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.\nDo not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operator",
      "Optional. The operator used for matching the events with the value of\nthe filter. If not specified, only events that have an exact key-value\npair specified in the filter are matched.\nThe only allowed value is 'match-path-pattern'.\n[See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Required. The value for the attribute.\nIf the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.",
      [],
      true,
      false,
    ),
  ];
}
