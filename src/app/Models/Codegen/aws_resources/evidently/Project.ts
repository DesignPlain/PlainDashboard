import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  evidently_ProjectDataDelivery,
  evidently_ProjectDataDelivery_GetTypes,
} from "../types/evidently_ProjectDataDelivery";

export interface ProjectArgs {
  // Specifies the description of the project.
  description?: string;

  // A name for the project.
  name?: string;

  // Tags to apply to the project. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A block that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view. See below.
  dataDelivery?: evidently_ProjectDataDelivery;
}
export class Project extends Resource {
  // The number of launches currently in the project. This includes all launches that have been created and not deleted, whether they are ongoing or not.
  public launchCount?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The number of ongoing launches currently in the project.
  public activeLaunchCount?: number;

  // The date and time that the project is created.
  public createdTime?: string;

  // Specifies the description of the project.
  public description?: string;

  // The number of features currently in the project.
  public featureCount?: number;

  // The number of experiments currently in the project. This includes all experiments that have been created and not deleted, whether they are ongoing or not.
  public experimentCount?: number;

  // A name for the project.
  public name?: string;

  // Tags to apply to the project. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A block that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view. See below.
  public dataDelivery?: evidently_ProjectDataDelivery;

  // The current state of the project. Valid values are `AVAILABLE` and `UPDATING`.
  public status?: string;

  // The number of ongoing experiments currently in the project.
  public activeExperimentCount?: number;

  // The ARN of the project.
  public arn?: string;

  // The date and time that the project was most recently updated.
  public lastUpdatedTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the project. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataDelivery",
        "A block that contains information about where Evidently is to store evaluation events for longer term storage, if you choose to do so. If you choose not to store these events, Evidently deletes them after using them to produce metrics and other experiment results that you can view. See below.",
        evidently_ProjectDataDelivery_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the project.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for the project.",
        [],
        false,
        true,
      ),
    ];
  }
}
