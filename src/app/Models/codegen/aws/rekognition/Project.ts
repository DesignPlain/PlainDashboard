import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rekognition_ProjectTimeouts,
  rekognition_ProjectTimeouts_GetTypes,
} from "../types/rekognition_ProjectTimeouts";

export interface ProjectArgs {
  // Specify the feature being customized. Valid values are `CONTENT_MODERATION` or `CUSTOM_LABELS`. Defaults to `CUSTOM_LABELS`
  feature?: string;

  /*
Desired name of the project

The following arguments are optional:
*/
  name?: string;

  //
  timeouts?: rekognition_ProjectTimeouts;

  // Specify if automatic retraining should occur. Valid values are `ENABLED` or `DISABLED`. Defaults to `DISABLED`
  autoUpdate?: string;
}
export class Project extends DS_Resource {
  // Specify the feature being customized. Valid values are `CONTENT_MODERATION` or `CUSTOM_LABELS`. Defaults to `CUSTOM_LABELS`
  public feature?: string;

  /*
Desired name of the project

The following arguments are optional:
*/
  public name?: string;

  //
  public timeouts?: rekognition_ProjectTimeouts;

  // ARN of the Project.
  public arn?: string;

  // Specify if automatic retraining should occur. Valid values are `ENABLED` or `DISABLED`. Defaults to `DISABLED`
  public autoUpdate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "autoUpdate",
        "Specify if automatic retraining should occur. Valid values are `ENABLED` or `DISABLED`. Defaults to `DISABLED`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "feature",
        "Specify the feature being customized. Valid values are `CONTENT_MODERATION` or `CUSTOM_LABELS`. Defaults to `CUSTOM_LABELS`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Desired name of the project\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => rekognition_ProjectTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
