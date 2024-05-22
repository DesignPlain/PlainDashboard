import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime {
  // Threshold within which objects are to be replicated. The only valid value is `15`.
  minutes?: number;

  // Status of RTC. Either `Enabled` or `Disabled`.
  status?: string;
}

export function s3_BucketV2ReplicationConfigurationRuleDestinationReplicationTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "minutes",
      "Threshold within which objects are to be replicated. The only valid value is `15`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status of RTC. Either `Enabled` or `Disabled`.",
      [],
      false,
      false,
    ),
  ];
}
