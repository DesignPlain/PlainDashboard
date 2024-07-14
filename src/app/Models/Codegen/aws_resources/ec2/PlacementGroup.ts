import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PlacementGroupArgs {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the placement group.
  name?: string;

  /*
The number of partitions to create in the
placement group.  Can only be specified when the `strategy` is set to
`partition`.  Valid values are 1 - 7 (default is `2`).
*/
  partitionCount?: number;

  /*
Determines how placement groups spread instances. Can only be used
when the `strategy` is set to `spread`. Can be `host` or `rack`. `host` can only be used for Outpost placement groups. Defaults to `rack`.
*/
  spreadLevel?: string;

  // The placement strategy. Can be `cluster`, `partition` or `spread`.
  strategy?: string;
}
export class PlacementGroup extends Resource {
  /*
Determines how placement groups spread instances. Can only be used
when the `strategy` is set to `spread`. Can be `host` or `rack`. `host` can only be used for Outpost placement groups. Defaults to `rack`.
*/
  public spreadLevel?: string;

  // The placement strategy. Can be `cluster`, `partition` or `spread`.
  public strategy?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the placement group.
  public arn?: string;

  // The name of the placement group.
  public name?: string;

  /*
The number of partitions to create in the
placement group.  Can only be specified when the `strategy` is set to
`partition`.  Valid values are 1 - 7 (default is `2`).
*/
  public partitionCount?: number;

  // The ID of the placement group.
  public placementGroupId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the placement group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "partitionCount",
        "The number of partitions to create in the\nplacement group.  Can only be specified when the `strategy` is set to\n`partition`.  Valid values are 1 - 7 (default is `2`).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "spreadLevel",
        "Determines how placement groups spread instances. Can only be used\nwhen the `strategy` is set to `spread`. Can be `host` or `rack`. `host` can only be used for Outpost placement groups. Defaults to `rack`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "strategy",
        "The placement strategy. Can be `cluster`, `partition` or `spread`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
