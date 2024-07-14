import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kendra_QuerySuggestionsBlockListSourceS3Path,
  kendra_QuerySuggestionsBlockListSourceS3Path_GetTypes,
} from "../types/kendra_QuerySuggestionsBlockListSourceS3Path";

export interface QuerySuggestionsBlockListArgs {
  // IAM (Identity and Access Management) role used to access the block list text file in S3.
  roleArn?: string;

  /*
S3 path where your block list text file is located. See details below.

The `source_s3_path` configuration block supports the following arguments:
*/
  sourceS3Path?: kendra_QuerySuggestionsBlockListSourceS3Path;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Description for a block list.
  description?: string;

  // Identifier of the index for a block list.
  indexId?: string;

  // Name for the block list.
  name?: string;
}
export class QuerySuggestionsBlockList extends Resource {
  // Description for a block list.
  public description?: string;

  // Unique identifier of the block list.
  public querySuggestionsBlockListId?: string;

  // IAM (Identity and Access Management) role used to access the block list text file in S3.
  public roleArn?: string;

  /*
S3 path where your block list text file is located. See details below.

The `source_s3_path` configuration block supports the following arguments:
*/
  public sourceS3Path?: kendra_QuerySuggestionsBlockListSourceS3Path;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the block list.
  public arn?: string;

  // Identifier of the index for a block list.
  public indexId?: string;

  // Name for the block list.
  public name?: string;

  //
  public status?: string;

  // Map of tags assigned to the resource, including those inherited from the provider's default_tags configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the block list.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "IAM (Identity and Access Management) role used to access the block list text file in S3.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceS3Path",
        "S3 path where your block list text file is located. See details below.\n\nThe `source_s3_path` configuration block supports the following arguments:",
        kendra_QuerySuggestionsBlockListSourceS3Path_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for a block list.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "indexId",
        "Identifier of the index for a block list.",
        [],
        true,
        true,
      ),
    ];
  }
}
