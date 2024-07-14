import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kendra_ThesaurusSourceS3Path,
  kendra_ThesaurusSourceS3Path_GetTypes,
} from "../types/kendra_ThesaurusSourceS3Path";

export interface ThesaurusArgs {
  // The description for a thesaurus.
  description?: string;

  // The identifier of the index for a thesaurus.
  indexId?: string;

  // The name for the thesaurus.
  name?: string;

  // The IAM (Identity and Access Management) role used to access the thesaurus file in S3.
  roleArn?: string;

  /*
The S3 path where your thesaurus file sits in S3. Detailed below.

The `source_s3_path` configuration block supports the following arguments:
*/
  sourceS3Path?: kendra_ThesaurusSourceS3Path;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Thesaurus extends Resource {
  // The name for the thesaurus.
  public name?: string;

  // The IAM (Identity and Access Management) role used to access the thesaurus file in S3.
  public roleArn?: string;

  // ARN of the thesaurus.
  public arn?: string;

  // The identifier of the index for a thesaurus.
  public indexId?: string;

  /*
The S3 path where your thesaurus file sits in S3. Detailed below.

The `source_s3_path` configuration block supports the following arguments:
*/
  public sourceS3Path?: kendra_ThesaurusSourceS3Path;

  // The current status of the thesaurus.
  public status?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public thesaurusId?: string;

  // The description for a thesaurus.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description for a thesaurus.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "indexId",
        "The identifier of the index for a thesaurus.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the thesaurus.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The IAM (Identity and Access Management) role used to access the thesaurus file in S3.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceS3Path",
        "The S3 path where your thesaurus file sits in S3. Detailed below.\n\nThe `source_s3_path` configuration block supports the following arguments:",
        kendra_ThesaurusSourceS3Path_GetTypes(),
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
    ];
  }
}
