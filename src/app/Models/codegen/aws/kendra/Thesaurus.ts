import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_ThesaurusSourceS3Path,
  kendra_ThesaurusSourceS3Path_GetTypes,
} from "../types/kendra_ThesaurusSourceS3Path";

export interface ThesaurusArgs {
  //
  tags?: Map<string, string>;

  //
  description?: string;

  // The identifier of the index for a thesaurus.
  indexId?: string;

  // The name for the thesaurus.
  name?: string;

  // The IAM (Identity and Access Management) role used to access the thesaurus file in S3.
  roleArn?: string;

  // The S3 path where your thesaurus file sits in S3. Detailed below.
  sourceS3Path?: kendra_ThesaurusSourceS3Path;
}
export class Thesaurus extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public thesaurusId?: string;

  // ARN of the thesaurus.
  public arn?: string;

  //
  public description?: string;

  // The IAM (Identity and Access Management) role used to access the thesaurus file in S3.
  public roleArn?: string;

  // The current status of the thesaurus.
  public status?: string;

  //
  public tags?: Map<string, string>;

  // The identifier of the index for a thesaurus.
  public indexId?: string;

  // The name for the thesaurus.
  public name?: string;

  // The S3 path where your thesaurus file sits in S3. Detailed below.
  public sourceS3Path?: kendra_ThesaurusSourceS3Path;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "sourceS3Path",
        "The S3 path where your thesaurus file sits in S3. Detailed below.",
        () => kendra_ThesaurusSourceS3Path_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "indexId",
        "The identifier of the index for a thesaurus.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the thesaurus.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The IAM (Identity and Access Management) role used to access the thesaurus file in S3.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
