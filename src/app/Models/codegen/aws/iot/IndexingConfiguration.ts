import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iot_IndexingConfigurationThingGroupIndexingConfiguration,
  iot_IndexingConfigurationThingGroupIndexingConfiguration_GetTypes,
} from '../types/iot_IndexingConfigurationThingGroupIndexingConfiguration';
import {
  iot_IndexingConfigurationThingIndexingConfiguration,
  iot_IndexingConfigurationThingIndexingConfiguration_GetTypes,
} from '../types/iot_IndexingConfigurationThingIndexingConfiguration';

export interface IndexingConfigurationArgs {
  // Thing group indexing configuration. See below.
  thingGroupIndexingConfiguration?: iot_IndexingConfigurationThingGroupIndexingConfiguration;

  // Thing indexing configuration. See below.
  thingIndexingConfiguration?: iot_IndexingConfigurationThingIndexingConfiguration;
}
export class IndexingConfiguration extends DS_Resource {
  // Thing group indexing configuration. See below.
  public thingGroupIndexingConfiguration?: iot_IndexingConfigurationThingGroupIndexingConfiguration;

  // Thing indexing configuration. See below.
  public thingIndexingConfiguration?: iot_IndexingConfigurationThingIndexingConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'thingIndexingConfiguration',
        'Thing indexing configuration. See below.',
        () => iot_IndexingConfigurationThingIndexingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'thingGroupIndexingConfiguration',
        'Thing group indexing configuration. See below.',
        () =>
          iot_IndexingConfigurationThingGroupIndexingConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
