import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  devopsguru_ResourceCollectionCloudformation,
  devopsguru_ResourceCollectionCloudformation_GetTypes,
} from "../types/devopsguru_ResourceCollectionCloudformation";
import {
  devopsguru_ResourceCollectionTags,
  devopsguru_ResourceCollectionTags_GetTypes,
} from "../types/devopsguru_ResourceCollectionTags";

export interface ResourceCollectionArgs {
  // A collection of AWS CloudFormation stacks. See `cloudformation` below for additional details.
  cloudformation?: devopsguru_ResourceCollectionCloudformation;

  // AWS tags used to filter the resources in the resource collection. See `tags` below for additional details.
  tags?: devopsguru_ResourceCollectionTags;

  /*
Type of AWS resource collection to create. Valid values are `AWS_CLOUD_FORMATION`, `AWS_SERVICE`, and `AWS_TAGS`.

The following arguments are optional:
*/
  type?: string;
}
export class ResourceCollection extends DS_Resource {
  // AWS tags used to filter the resources in the resource collection. See `tags` below for additional details.
  public tags?: devopsguru_ResourceCollectionTags;

  /*
Type of AWS resource collection to create. Valid values are `AWS_CLOUD_FORMATION`, `AWS_SERVICE`, and `AWS_TAGS`.

The following arguments are optional:
*/
  public type?: string;

  // A collection of AWS CloudFormation stacks. See `cloudformation` below for additional details.
  public cloudformation?: devopsguru_ResourceCollectionCloudformation;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "cloudformation",
        "A collection of AWS CloudFormation stacks. See `cloudformation` below for additional details.",
        () => devopsguru_ResourceCollectionCloudformation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tags",
        "AWS tags used to filter the resources in the resource collection. See `tags` below for additional details.",
        () => devopsguru_ResourceCollectionTags_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of AWS resource collection to create. Valid values are `AWS_CLOUD_FORMATION`, `AWS_SERVICE`, and `AWS_TAGS`.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
