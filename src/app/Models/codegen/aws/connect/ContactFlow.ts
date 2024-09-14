import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ContactFlowArgs {
  // Specifies the content of the Contact Flow, provided as a JSON string, written in Amazon Connect Contact Flow Language. If defined, the `filename` argument cannot be used.
  content?: string;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the Contact Flow source specified with `filename`.
  contentHash?: string;

  // Specifies the description of the Contact Flow.
  description?: string;

  // The path to the Contact Flow source within the local filesystem. Conflicts with `content`.
  filename?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // Specifies the name of the Contact Flow.
  name?: string;

  // Tags to apply to the Contact Flow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the type of the Contact Flow. Defaults to `CONTACT_FLOW`. Allowed Values are: `CONTACT_FLOW`, `CUSTOMER_QUEUE`, `CUSTOMER_HOLD`, `CUSTOMER_WHISPER`, `AGENT_HOLD`, `AGENT_WHISPER`, `OUTBOUND_WHISPER`, `AGENT_TRANSFER`, `QUEUE_TRANSFER`.
  type?: string;
}
export class ContactFlow extends DS_Resource {
  // The Amazon Resource Name (ARN) of the Contact Flow.
  public arn?: string;

  // Specifies the content of the Contact Flow, provided as a JSON string, written in Amazon Connect Contact Flow Language. If defined, the `filename` argument cannot be used.
  public content?: string;

  // Tags to apply to the Contact Flow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Specifies the type of the Contact Flow. Defaults to `CONTACT_FLOW`. Allowed Values are: `CONTACT_FLOW`, `CUSTOMER_QUEUE`, `CUSTOMER_HOLD`, `CUSTOMER_WHISPER`, `AGENT_HOLD`, `AGENT_WHISPER`, `OUTBOUND_WHISPER`, `AGENT_TRANSFER`, `QUEUE_TRANSFER`.
  public type?: string;

  // Specifies the name of the Contact Flow.
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The identifier of the Contact Flow.
  public contactFlowId?: string;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the Contact Flow source specified with `filename`.
  public contentHash?: string;

  // Specifies the description of the Contact Flow.
  public description?: string;

  // The path to the Contact Flow source within the local filesystem. Conflicts with `content`.
  public filename?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the Contact Flow.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "filename",
        "The path to the Contact Flow source within the local filesystem. Conflicts with `content`.",
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
      new DynamicUIProps(
        InputType.String,
        "name",
        "Specifies the name of the Contact Flow.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the Contact Flow. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Specifies the type of the Contact Flow. Defaults to `CONTACT_FLOW`. Allowed Values are: `CONTACT_FLOW`, `CUSTOMER_QUEUE`, `CUSTOMER_HOLD`, `CUSTOMER_WHISPER`, `AGENT_HOLD`, `AGENT_WHISPER`, `OUTBOUND_WHISPER`, `AGENT_TRANSFER`, `QUEUE_TRANSFER`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "content",
        "Specifies the content of the Contact Flow, provided as a JSON string, written in Amazon Connect Contact Flow Language. If defined, the `filename` argument cannot be used.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentHash",
        "Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the Contact Flow source specified with `filename`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
