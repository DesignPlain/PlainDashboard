import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LinkArgs {
  // Human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.
  labelTemplate?: string;

  // Types of data that the source account shares with the monitoring account.
  resourceTypes?: Array<string>;

  /*
Identifier of the sink to use to create this link.

The following arguments are optional:
*/
  sinkIdentifier?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Link extends Resource {
  // Label that is assigned to this link.
  public label?: string;

  // ID string that AWS generated as part of the link ARN.
  public linkId?: string;

  // ARN of the sink that is used for this link.
  public sinkArn?: string;

  // ARN of the link.
  public arn?: string;

  // Human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.
  public labelTemplate?: string;

  // Types of data that the source account shares with the monitoring account.
  public resourceTypes?: Array<string>;

  /*
Identifier of the sink to use to create this link.

The following arguments are optional:
*/
  public sinkIdentifier?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "sinkIdentifier",
        "Identifier of the sink to use to create this link.\n\nThe following arguments are optional:",
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
      new DynamicUIProps(
        InputType.String,
        "labelTemplate",
        "Human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "resourceTypes",
        "Types of data that the source account shares with the monitoring account.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
