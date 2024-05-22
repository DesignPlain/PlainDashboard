import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_SubnetworkLogConfig {
  /*
Export filter used to define which VPC flow logs should be logged, as as CEL expression. See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.
*/
  filterExpr?: string;

  /*
Can only be specified if VPC flow logging for this subnetwork is enabled.
The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.
*/
  flowSampling?: number;

  /*
Can only be specified if VPC flow logging for this subnetwork is enabled.
Configures whether metadata fields should be added to the reported VPC
flow logs.
Default value is `INCLUDE_ALL_METADATA`.
Possible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`, `CUSTOM_METADATA`.
*/
  metadata?: string;

  /*
List of metadata fields that should be added to reported logs.
Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.
*/
  metadataFields?: Array<string>;

  /*
Can only be specified if VPC flow logging for this subnetwork is enabled.
Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection.
Default value is `INTERVAL_5_SEC`.
Possible values are: `INTERVAL_5_SEC`, `INTERVAL_30_SEC`, `INTERVAL_1_MIN`, `INTERVAL_5_MIN`, `INTERVAL_10_MIN`, `INTERVAL_15_MIN`.
*/
  aggregationInterval?: string;
}

export function compute_SubnetworkLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "aggregationInterval",
      "Can only be specified if VPC flow logging for this subnetwork is enabled.\nToggles the aggregation interval for collecting flow logs. Increasing the\ninterval time will reduce the amount of generated flow logs for long\nlasting connections. Default is an interval of 5 seconds per connection.\nDefault value is `INTERVAL_5_SEC`.\nPossible values are: `INTERVAL_5_SEC`, `INTERVAL_30_SEC`, `INTERVAL_1_MIN`, `INTERVAL_5_MIN`, `INTERVAL_10_MIN`, `INTERVAL_15_MIN`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filterExpr",
      "Export filter used to define which VPC flow logs should be logged, as as CEL expression. See\nhttps://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.\nThe default value is 'true', which evaluates to include everything.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "flowSampling",
      "Can only be specified if VPC flow logging for this subnetwork is enabled.\nThe value of the field must be in [0, 1]. Set the sampling rate of VPC\nflow logs within the subnetwork where 1.0 means all collected logs are\nreported and 0.0 means no logs are reported. Default is 0.5 which means\nhalf of all collected logs are reported.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metadata",
      "Can only be specified if VPC flow logging for this subnetwork is enabled.\nConfigures whether metadata fields should be added to the reported VPC\nflow logs.\nDefault value is `INCLUDE_ALL_METADATA`.\nPossible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`, `CUSTOM_METADATA`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "metadataFields",
      'List of metadata fields that should be added to reported logs.\nCan only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.',
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
