import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securitylake_DataLakeConfigurationLifecycleConfiguration,
  securitylake_DataLakeConfigurationLifecycleConfiguration_GetTypes,
} from "./securitylake_DataLakeConfigurationLifecycleConfiguration";
import {
  securitylake_DataLakeConfigurationReplicationConfiguration,
  securitylake_DataLakeConfigurationReplicationConfiguration_GetTypes,
} from "./securitylake_DataLakeConfigurationReplicationConfiguration";
import {
  securitylake_DataLakeConfigurationEncryptionConfiguration,
  securitylake_DataLakeConfigurationEncryptionConfiguration_GetTypes,
} from "./securitylake_DataLakeConfigurationEncryptionConfiguration";

export interface securitylake_DataLakeConfiguration {
  // Provides lifecycle details of Amazon Security Lake object.
  lifecycleConfiguration?: securitylake_DataLakeConfigurationLifecycleConfiguration;

  // The AWS Regions where Security Lake is automatically enabled.
  region?: string;

  // Provides replication details of Amazon Security Lake object.
  replicationConfiguration?: securitylake_DataLakeConfigurationReplicationConfiguration;

  // Provides encryption details of Amazon Security Lake object.
  encryptionConfigurations?: Array<securitylake_DataLakeConfigurationEncryptionConfiguration>;
}

export function securitylake_DataLakeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "encryptionConfigurations",
      "Provides encryption details of Amazon Security Lake object.",
      () =>
        securitylake_DataLakeConfigurationEncryptionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lifecycleConfiguration",
      "Provides lifecycle details of Amazon Security Lake object.",
      () => securitylake_DataLakeConfigurationLifecycleConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "The AWS Regions where Security Lake is automatically enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "replicationConfiguration",
      "Provides replication details of Amazon Security Lake object.",
      () =>
        securitylake_DataLakeConfigurationReplicationConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
