import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dms_ReplicationConfigComputeConfig {
  // Specifies the maximum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 2 DCUs as the minimum value allowed. The list of valid DCU values includes 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384.
  maxCapacityUnits?: number;

  // Specifies the minimum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. The list of valid DCU values includes 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. If this value isn't set DMS scans the current activity of available source tables to identify an optimum setting for this parameter.
  minCapacityUnits?: number;

  // The Availability Zone where the DMS Serverless replication using this configuration will run. The default value is a random.
  availabilityZone?: string;

  // A list of custom DNS name servers supported for the DMS Serverless replication to access your source or target database.
  dnsNameServers?: string;

  // An Key Management Service (KMS) key Amazon Resource Name (ARN) that is used to encrypt the data during DMS Serverless replication. If you don't specify a value for the KmsKeyId parameter, DMS uses your default encryption key.
  kmsKeyId?: string;

  // Specifies the virtual private cloud (VPC) security group to use with the DMS Serverless replication. The VPC security group must work with the VPC containing the replication.
  vpcSecurityGroupIds?: Array<string>;

  // Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`.
  multiAz?: boolean;

  /*
The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

- Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week.
- Format: `ddd:hh24:mi-ddd:hh24:mi`
- Valid Days: `mon, tue, wed, thu, fri, sat, sun`
- Constraints: Minimum 30-minute window.
*/
  preferredMaintenanceWindow?: string;

  // Specifies a subnet group identifier to associate with the DMS Serverless replication.
  replicationSubnetGroupId?: string;
}

export function dms_ReplicationConfigComputeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dnsNameServers",
      "A list of custom DNS name servers supported for the DMS Serverless replication to access your source or target database.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "An Key Management Service (KMS) key Amazon Resource Name (ARN) that is used to encrypt the data during DMS Serverless replication. If you don't specify a value for the KmsKeyId parameter, DMS uses your default encryption key.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcSecurityGroupIds",
      "Specifies the virtual private cloud (VPC) security group to use with the DMS Serverless replication. The VPC security group must work with the VPC containing the replication.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minCapacityUnits",
      "Specifies the minimum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. The list of valid DCU values includes 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. If this value isn't set DMS scans the current activity of available source tables to identify an optimum setting for this parameter.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The Availability Zone where the DMS Serverless replication using this configuration will run. The default value is a random.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "preferredMaintenanceWindow",
      "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).\n\n- Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week.\n- Format: `ddd:hh24:mi-ddd:hh24:mi`\n- Valid Days: `mon, tue, wed, thu, fri, sat, sun`\n- Constraints: Minimum 30-minute window.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "replicationSubnetGroupId",
      "Specifies a subnet group identifier to associate with the DMS Serverless replication.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxCapacityUnits",
      "Specifies the maximum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 2 DCUs as the minimum value allowed. The list of valid DCU values includes 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "multiAz",
      "Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`.",
      [],
      false,
      false,
    ),
  ];
}
