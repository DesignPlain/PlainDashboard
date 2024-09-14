import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  m2_ApplicationDefinition,
  m2_ApplicationDefinition_GetTypes,
} from "../types/m2_ApplicationDefinition";
import {
  m2_ApplicationTimeouts,
  m2_ApplicationTimeouts_GetTypes,
} from "../types/m2_ApplicationTimeouts";

export interface ApplicationArgs {
  // ARN of role for application to use to access AWS resources.
  roleArn?: string;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: m2_ApplicationTimeouts;

  // The application definition for this application. You can specify either inline JSON or an S3 bucket location.
  definition?: m2_ApplicationDefinition;

  // Description of the application.
  description?: string;

  // Engine type must be `microfocus | bluage`.
  engineType?: string;

  // KMS Key to use for the Application.
  kmsKeyId?: string;

  /*
Unique identifier of the application.

The following arguments are optional:
*/
  name?: string;
}
export class Application extends DS_Resource {
  // Current version of the application deployed.
  public currentVersion?: number;

  // Description of the application.
  public description?: string;

  // KMS Key to use for the Application.
  public kmsKeyId?: string;

  // ARN of role for application to use to access AWS resources.
  public roleArn?: string;

  // Id of the Application.
  public applicationId?: string;

  // The application definition for this application. You can specify either inline JSON or an S3 bucket location.
  public definition?: m2_ApplicationDefinition;

  // Engine type must be `microfocus | bluage`.
  public engineType?: string;

  /*
Unique identifier of the application.

The following arguments are optional:
*/
  public name?: string;

  // Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: m2_ApplicationTimeouts;

  // ARN of the Application.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "KMS Key to use for the Application.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique identifier of the application.\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "ARN of role for application to use to access AWS resources.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags assigned to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => m2_ApplicationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "definition",
        "The application definition for this application. You can specify either inline JSON or an S3 bucket location.",
        () => m2_ApplicationDefinition_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the application.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineType",
        "Engine type must be `microfocus | bluage`.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
