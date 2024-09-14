import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_FaqS3Path,
  kendra_FaqS3Path_GetTypes,
} from "../types/kendra_FaqS3Path";

export interface FaqArgs {
  // The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see [IAM Roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
  roleArn?: string;

  // The S3 location of the FAQ input data. Detailed below.
  s3Path?: kendra_FaqS3Path;

  //
  tags?: Map<string, string>;

  //
  description?: string;

  //
  fileFormat?: string;

  // The identifier of the index for a FAQ.
  indexId?: string;

  //
  languageCode?: string;

  // The name that should be associated with the FAQ.
  name?: string;
}
export class Faq extends DS_Resource {
  // The status of the FAQ. It is ready to use when the status is ACTIVE.
  public status?: string;

  // The Unix datetime that the FAQ was created.
  public createdAt?: string;

  // When the Status field value is `FAILED`, this contains a message that explains why.
  public errorMessage?: string;

  //
  public languageCode?: string;

  // The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see [IAM Roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
  public roleArn?: string;

  //
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The date and time that the FAQ was last updated.
  public updatedAt?: string;

  //
  public description?: string;

  // The identifier of the FAQ.
  public faqId?: string;

  //
  public fileFormat?: string;

  // ARN of the FAQ.
  public arn?: string;

  // The S3 location of the FAQ input data. Detailed below.
  public s3Path?: kendra_FaqS3Path;

  // The identifier of the index for a FAQ.
  public indexId?: string;

  // The name that should be associated with the FAQ.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "indexId",
        "The identifier of the index for a FAQ.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name that should be associated with the FAQ.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see [IAM Roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "s3Path",
        "The S3 location of the FAQ input data. Detailed below.",
        () => kendra_FaqS3Path_GetTypes(),
        true,
        true,
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
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fileFormat",
        "",
        () => [],
        false,
        true,
      ),
    ];
  }
}
