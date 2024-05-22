import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kms_getKeyMultiRegionConfigurationPrimaryKey,
  kms_getKeyMultiRegionConfigurationPrimaryKey_GetTypes,
} from "./kms_getKeyMultiRegionConfigurationPrimaryKey";
import {
  kms_getKeyMultiRegionConfigurationReplicaKey,
  kms_getKeyMultiRegionConfigurationReplicaKey_GetTypes,
} from "./kms_getKeyMultiRegionConfigurationReplicaKey";

export interface kms_getKeyMultiRegionConfiguration {
  // Indicates whether the KMS key is a `PRIMARY` or `REPLICA` key.
  multiRegionKeyType?: string;

  // The key ARN and Region of the primary key. This is the current KMS key if it is the primary key.
  primaryKeys?: Array<kms_getKeyMultiRegionConfigurationPrimaryKey>;

  // The key ARNs and Regions of all replica keys. Includes the current KMS key if it is a replica key.
  replicaKeys?: Array<kms_getKeyMultiRegionConfigurationReplicaKey>;
}

export function kms_getKeyMultiRegionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "multiRegionKeyType",
      "Indicates whether the KMS key is a `PRIMARY` or `REPLICA` key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "primaryKeys",
      "The key ARN and Region of the primary key. This is the current KMS key if it is the primary key.",
      kms_getKeyMultiRegionConfigurationPrimaryKey_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "replicaKeys",
      "The key ARNs and Regions of all replica keys. Includes the current KMS key if it is a replica key.",
      kms_getKeyMultiRegionConfigurationReplicaKey_GetTypes(),
      true,
      false,
    ),
  ];
}
