import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SchemaArgs {
  // The name of the schema. Maximum of 385 characters consisting of lower case letters, upper case letters, ., -, _, @.
  name?: string;

  // The name of the registry in which this schema belongs.
  registryName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of the schema. Valid values: `OpenApi3` or `JSONSchemaDraft4`.
  type?: string;

  // The schema specification. Must be a valid Open API 3.0 spec.
  content?: string;

  // The description of the schema. Maximum of 256 characters.
  description?: string;
}
export class Schema extends Resource {
  // The version of the schema.
  public version?: string;

  // The created date of the version of the schema.
  public versionCreatedDate?: string;

  // The schema specification. Must be a valid Open API 3.0 spec.
  public content?: string;

  // The name of the registry in which this schema belongs.
  public registryName?: string;

  // The type of the schema. Valid values: `OpenApi3` or `JSONSchemaDraft4`.
  public type?: string;

  // The name of the schema. Maximum of 385 characters consisting of lower case letters, upper case letters, ., -, _, @.
  public name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the discoverer.
  public arn?: string;

  // The description of the schema. Maximum of 256 characters.
  public description?: string;

  // The last modified date of the schema.
  public lastModified?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of the schema. Valid values: `OpenApi3` or `JSONSchemaDraft4`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "content",
        "The schema specification. Must be a valid Open API 3.0 spec.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the schema. Maximum of 256 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the schema. Maximum of 385 characters consisting of lower case letters, upper case letters, ., -, _, @.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "registryName",
        "The name of the registry in which this schema belongs.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
