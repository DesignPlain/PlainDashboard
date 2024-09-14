import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ContactFlowModuleArgs {
  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the Contact Flow Module source specified with `filename`.
  contentHash?: string;

  // Specifies the description of the Contact Flow Module.
  description?: string;

  // The path to the Contact Flow Module source within the local filesystem. Conflicts with `content`.
  filename?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // Specifies the name of the Contact Flow Module.
  name?: string;

  // Tags to apply to the Contact Flow Module. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the content of the Contact Flow Module, provided as a JSON string, written in Amazon Connect Contact Flow Language. If defined, the `filename` argument cannot be used.
  content?: string;
}
export class ContactFlowModule extends DS_Resource {
  // Tags to apply to the Contact Flow Module. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the Contact Flow Module.
  public arn?: string;

  // The identifier of the Contact Flow Module.
  public contactFlowModuleId?: string;

  // Specifies the content of the Contact Flow Module, provided as a JSON string, written in Amazon Connect Contact Flow Language. If defined, the `filename` argument cannot be used.
  public content?: string;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the Contact Flow Module source specified with `filename`.
  public contentHash?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // Specifies the name of the Contact Flow Module.
  public name?: string;

  // Specifies the description of the Contact Flow Module.
  public description?: string;

  // The path to the Contact Flow Module source within the local filesystem. Conflicts with `content`.
  public filename?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the Contact Flow Module.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the Contact Flow Module. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "content",
        "Specifies the content of the Contact Flow Module, provided as a JSON string, written in Amazon Connect Contact Flow Language. If defined, the `filename` argument cannot be used.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentHash",
        "Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the Contact Flow Module source specified with `filename`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the Contact Flow Module.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filename",
        "The path to the Contact Flow Module source within the local filesystem. Conflicts with `content`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Specifies the identifier of the hosting Amazon Connect Instance.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
