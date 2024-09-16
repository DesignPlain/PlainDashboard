import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_OntapVolumeAggregateConfiguration {
  // Used to specify the names of the aggregates on which the volume will be created. Each aggregate needs to be in the format aggrX where X is the number of the aggregate.
  aggregates?: Array<string>;

  // Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. the default value is `8`.
  constituentsPerAggregate?: number;

  // The total amount of constituents for a `FLEXGROUP` volume. This would equal constituents_per_aggregate x aggregates.
  totalConstituents?: number;
}

export function fsx_OntapVolumeAggregateConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'aggregates',
      'Used to specify the names of the aggregates on which the volume will be created. Each aggregate needs to be in the format aggrX where X is the number of the aggregate.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'constituentsPerAggregate',
      'Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. the default value is `8`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'totalConstituents',
      'The total amount of constituents for a `FLEXGROUP` volume. This would equal constituents_per_aggregate x aggregates.',
      () => [],
      false,
      false,
    ),
  ];
}
