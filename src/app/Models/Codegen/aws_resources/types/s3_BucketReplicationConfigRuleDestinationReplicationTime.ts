import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketReplicationConfigRuleDestinationReplicationTimeTime,
  s3_BucketReplicationConfigRuleDestinationReplicationTimeTime_GetTypes,
} from "./s3_BucketReplicationConfigRuleDestinationReplicationTimeTime";

export interface s3_BucketReplicationConfigRuleDestinationReplicationTime {
  // Status of the Replication Time Control. Either `"Enabled"` or `"Disabled"`.
  status?: string;

  // Configuration block specifying the time by which replication should be complete for all objects and operations on objects. See below.
  time?: s3_BucketReplicationConfigRuleDestinationReplicationTimeTime;
}

export function s3_BucketReplicationConfigRuleDestinationReplicationTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      'Status of the Replication Time Control. Either `"Enabled"` or `"Disabled"`.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "time",
      "Configuration block specifying the time by which replication should be complete for all objects and operations on objects. See below.",
      s3_BucketReplicationConfigRuleDestinationReplicationTimeTime_GetTypes(),
      true,
      false,
    ),
  ];
}
