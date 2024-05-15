import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
  // Number of milliseconds for which to keep the storage for a partition.
  ExpirationMs?: string;

  /*
Type of partitioning.
Possible values are: `PARTITION_TYPE_UNSPECIFIED`, `HOUR`, `DAY`, `MONTH`, `YEAR`.
*/
  Type?: string;
}

export function Healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExpirationMs",
      "Number of milliseconds for which to keep the storage for a partition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Type of partitioning.\nPossible values are: `PARTITION_TYPE_UNSPECIFIED`, `HOUR`, `DAY`, `MONTH`, `YEAR`.",
      [],
      true,
      false,
    ),
  ];
}
