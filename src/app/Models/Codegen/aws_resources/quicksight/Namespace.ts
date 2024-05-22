import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_NamespaceTimeouts,
  quicksight_NamespaceTimeouts_GetTypes,
} from "../types/quicksight_NamespaceTimeouts";

export interface NamespaceArgs {
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

  // AWS account ID.
  awsAccountId?: string;
}
export class Namespace extends Resource {
  // ARN of the Namespace.
  public arn?: string;

  // AWS account ID.
  public awsAccountId?: string;

  // Namespace AWS Region.
  public capacityRegion?: string;

  // User identity directory type. Defaults to `QUICKSIGHT`, the only current valid value.
  public identityStore?: string;

  //
  public timeouts?: quicksight_NamespaceTimeouts;

  // Creation status of the namespace.
  public creationStatus?: string;

  /*
Name of the namespace.

The following arguments are optional:
*/
  public namespace?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityStore",
        "User identity directory type. Defaults to `QUICKSIGHT`, the only current valid value.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespace",
        "Name of the namespace.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        quicksight_NamespaceTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
