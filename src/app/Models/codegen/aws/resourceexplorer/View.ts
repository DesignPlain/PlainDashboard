import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  resourceexplorer_ViewFilters,
  resourceexplorer_ViewFilters_GetTypes,
} from "../types/resourceexplorer_ViewFilters";
import {
  resourceexplorer_ViewIncludedProperty,
  resourceexplorer_ViewIncludedProperty_GetTypes,
} from "../types/resourceexplorer_ViewIncludedProperty";

export interface ViewArgs {
  // The name of the view. The name must be no more than 64 characters long, and can include letters, digits, and the dash (-) character. The name must be unique within its AWS Region.
  name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies whether the view is the [_default view_](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views-about.html#manage-views-about-default) for the AWS Region. Default: `false`.
  defaultView?: boolean;

  // Specifies which resources are included in the results of queries made using this view. See Filters below for more details.
  filters?: resourceexplorer_ViewFilters;

  // Optional fields to be included in search results from this view. See Included Properties below for more details.
  includedProperties?: Array<resourceexplorer_ViewIncludedProperty>;
}
export class View extends DS_Resource {
  // Amazon Resource Name (ARN) of the Resource Explorer view.
  public arn?: string;

  // Specifies whether the view is the [_default view_](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views-about.html#manage-views-about-default) for the AWS Region. Default: `false`.
  public defaultView?: boolean;

  // Specifies which resources are included in the results of queries made using this view. See Filters below for more details.
  public filters?: resourceexplorer_ViewFilters;

  // Optional fields to be included in search results from this view. See Included Properties below for more details.
  public includedProperties?: Array<resourceexplorer_ViewIncludedProperty>;

  // The name of the view. The name must be no more than 64 characters long, and can include letters, digits, and the dash (-) character. The name must be unique within its AWS Region.
  public name?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "defaultView",
        "Specifies whether the view is the [_default view_](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views-about.html#manage-views-about-default) for the AWS Region. Default: `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "filters",
        "Specifies which resources are included in the results of queries made using this view. See Filters below for more details.",
        () => resourceexplorer_ViewFilters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "includedProperties",
        "Optional fields to be included in search results from this view. See Included Properties below for more details.",
        () => resourceexplorer_ViewIncludedProperty_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the view. The name must be no more than 64 characters long, and can include letters, digits, and the dash (-) character. The name must be unique within its AWS Region.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
