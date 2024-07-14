import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
  // Number of milliseconds for which to keep the storage for a partition.
  expirationMs?: string;

  /*
Type of partitioning.
Possible values are: `PARTITION_TYPE_UNSPECIFIED`, `HOUR`, `DAY`, `MONTH`, `YEAR`.
*/
  type?: string;
}

export function healthcare_FhirStoreStreamConfigBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "expirationMs",
      "Number of milliseconds for which to keep the storage for a partition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of partitioning.\nPossible values are: `PARTITION_TYPE_UNSPECIFIED`, `HOUR`, `DAY`, `MONTH`, `YEAR`.",
      [],
      true,
      false,
    ),
  ];
}
