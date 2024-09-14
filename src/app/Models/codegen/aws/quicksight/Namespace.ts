import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_NamespaceTimeouts,
  quicksight_NamespaceTimeouts_GetTypes,
} from "../types/quicksight_NamespaceTimeouts";

export interface NamespaceArgs {
  // AWS account ID.
  awsAccountId?: string;

  // User identity directory type. Defaults to `QUICKSIGHT`, the only current valid value.
  identityStore?: string;

  /*
Name of the namespace.

The following arguments are optional:
*/
  namespace?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: quicksight_NamespaceTimeouts;
}
export class Namespace extends DS_Resource {
  /*
Name of the namespace.

The following arguments are optional:
*/
  public namespace?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public timeouts?: quicksight_NamespaceTimeouts;

  // Namespace AWS Region.
  public capacityRegion?: string;

  // Creation status of the namespace.
  public creationStatus?: string;

  // User identity directory type. Defaults to `QUICKSIGHT`, the only current valid value.
  public identityStore?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Namespace.
  public arn?: string;

  // AWS account ID.
  public awsAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityStore",
        "User identity directory type. Defaults to `QUICKSIGHT`, the only current valid value.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespace",
        "Name of the namespace.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => quicksight_NamespaceTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
