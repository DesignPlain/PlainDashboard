import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rds_InstanceBlueGreenUpdate {
  /*
Enables low-downtime updates when `true`.
Default is `false`.

[instance-replication]:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Replication.html
[instance-maintenance]:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html
[blue-green]:
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html
*/
  enabled?: boolean;
}

export function rds_InstanceBlueGreenUpdate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Enables low-downtime updates when `true`.\nDefault is `false`.\n\n[instance-replication]:\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Replication.html\n[instance-maintenance]:\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html\n[blue-green]:\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html',
      () => [],
      false,
      false,
    ),
  ];
}
