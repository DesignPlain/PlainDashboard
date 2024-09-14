import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  evidently_ProjectDataDelivery,
  evidently_ProjectDataDelivery_GetTypes,
} from "../types/evidently_ProjectDataDelivery";

export interface ProjectArgs {
  // A name for the project.
  name?: string;

  // Tags to apply to the project. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A block that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view. See below.
  dataDelivery?: evidently_ProjectDataDelivery;

  // Specifies the description of the project.
  description?: string;
}
export class Project extends DS_Resource {
  // A name for the project.
  public name?: string;

  // A block that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view. See below.
  public dataDelivery?: evidently_ProjectDataDelivery;

  // The number of experiments currently in the project. This includes all experiments that have been created and not deleted, whether they are ongoing or not.
  public experimentCount?: number;

  // The current state of the project. Valid values are `AVAILABLE` and `UPDATING`.
  public status?: string;

  // Tags to apply to the project. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The number of ongoing launches currently in the project.
  public activeLaunchCount?: number;

  // The number of features currently in the project.
  public featureCount?: number;

  // The date and time that the project is created.
  public createdTime?: string;

  // Specifies the description of the project.
  public description?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The number of ongoing experiments currently in the project.
  public activeExperimentCount?: number;

  // The ARN of the project.
  public arn?: string;

  // The date and time that the project was most recently updated.
  public lastUpdatedTime?: string;

  // The number of launches currently in the project. This includes all launches that have been created and not deleted, whether they are ongoing or not.
  public launchCount?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "dataDelivery",
        "A block that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view. See below.",
        () => evidently_ProjectDataDelivery_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the project.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for the project.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the project. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
