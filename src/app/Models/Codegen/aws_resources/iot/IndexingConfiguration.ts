import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  iot_IndexingConfigurationThingIndexingConfiguration,
  iot_IndexingConfigurationThingIndexingConfiguration_GetTypes,
} from "../types/iot_IndexingConfigurationThingIndexingConfiguration";
import {
  iot_IndexingConfigurationThingGroupIndexingConfiguration,
  iot_IndexingConfigurationThingGroupIndexingConfiguration_GetTypes,
} from "../types/iot_IndexingConfigurationThingGroupIndexingConfiguration";

export interface IndexingConfigurationArgs {
  // Thing group indexing configuration. See below.
  thingGroupIndexingConfiguration?: iot_IndexingConfigurationThingGroupIndexingConfiguration;

  // Thing indexing configuration. See below.
  thingIndexingConfiguration?: iot_IndexingConfigurationThingIndexingConfiguration;
}
export class IndexingConfiguration extends Resource {
  // Thing group indexing configuration. See below.
  public thingGroupIndexingConfiguration?: iot_IndexingConfigurationThingGroupIndexingConfiguration;

  // Thing indexing configuration. See below.
  public thingIndexingConfiguration?: iot_IndexingConfigurationThingIndexingConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "thingGroupIndexingConfiguration",
        "Thing group indexing configuration. See below.",
        iot_IndexingConfigurationThingGroupIndexingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "thingIndexingConfiguration",
        "Thing indexing configuration. See below.",
        iot_IndexingConfigurationThingIndexingConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
