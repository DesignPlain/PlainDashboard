import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
  /*
Type of partitioning.
Possible values are: `PARTITION_TYPE_UNSPECIFIED`, `HOUR`, `DAY`, `MONTH`, `YEAR`.
*/
  type?: string;

  // Number of milliseconds for which to keep the storage for a partition.
  expirationMs?: string;
}

export function healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of partitioning.\nPossible values are: `PARTITION_TYPE_UNSPECIFIED`, `HOUR`, `DAY`, `MONTH`, `YEAR`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expirationMs",
      "Number of milliseconds for which to keep the storage for a partition.",
      () => [],
      false,
      false,
    ),
  ];
}
