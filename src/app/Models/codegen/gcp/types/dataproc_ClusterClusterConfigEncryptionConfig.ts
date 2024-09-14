import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_ClusterClusterConfigEncryptionConfig {
  /*
The Cloud KMS key name to use for PD disk encryption for
all instances in the cluster.

- - -
*/
  kmsKeyName?: string;
}

export function dataproc_ClusterClusterConfigEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "The Cloud KMS key name to use for PD disk encryption for\nall instances in the cluster.\n\n- - -",
      () => [],
      true,
      false,
    ),
  ];
}
