export interface getFunctionEventTriggerEventFilter {
  /*
'Required. The name of a CloudEvents attribute.
Currently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.
Do not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.
*/
  Attribute?: string;

  /*
Optional. The operator used for matching the events with the value of
the filter. If not specified, only events that have an exact key-value
pair specified in the filter are matched.
The only allowed value is 'match-path-pattern'.
[See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'
*/
  Operator?: string;

  /*
Required. The value for the attribute.
If the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.
*/
  Value?: string;
}
