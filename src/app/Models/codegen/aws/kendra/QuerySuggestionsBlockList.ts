import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kendra_QuerySuggestionsBlockListSourceS3Path,
  kendra_QuerySuggestionsBlockListSourceS3Path_GetTypes,
} from '../types/kendra_QuerySuggestionsBlockListSourceS3Path';

export interface QuerySuggestionsBlockListArgs {
  // S3 path where your block list text file is located. See details below.
  sourceS3Path?: kendra_QuerySuggestionsBlockListSourceS3Path;

  //
  tags?: Map<string, string>;

  //
  description?: string;

  // Identifier of the index for a block list.
  indexId?: string;

  // Name for the block list.
  name?: string;

  // IAM (Identity and Access Management) role used to access the block list text file in S3.
  roleArn?: string;
}
export class QuerySuggestionsBlockList extends DS_Resource {
  // ARN of the block list.
  public arn?: string;

  //
  public description?: string;

  // Identifier of the index for a block list.
  public indexId?: string;

  // Name for the block list.
  public name?: string;

  // S3 path where your block list text file is located. See details below.
  public sourceS3Path?: kendra_QuerySuggestionsBlockListSourceS3Path;

  //
  public tags?: Map<string, string>;

  // Unique identifier of the block list.
  public querySuggestionsBlockListId?: string;

  // IAM (Identity and Access Management) role used to access the block list text file in S3.
  public roleArn?: string;

  //
  public status?: string;

  // Map of tags assigned to the resource, including those inherited from the provider's default_tags configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'sourceS3Path',
        'S3 path where your block list text file is located. See details below.',
        () => kendra_QuerySuggestionsBlockListSourceS3Path_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'indexId',
        'Identifier of the index for a block list.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name for the block list.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'IAM (Identity and Access Management) role used to access the block list text file in S3.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
