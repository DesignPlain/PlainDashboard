import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kendra_FaqS3Path,
  kendra_FaqS3Path_GetTypes,
} from "../types/kendra_FaqS3Path";

export interface FaqArgs {
  /*
The S3 location of the FAQ input data. Detailed below.

The `s3_path` configuration block supports the following arguments:
*/
  s3Path?: kendra_FaqS3Path;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The description for a FAQ.
  description?: string;

  // The file format used by the input files for the FAQ. Valid Values are `CSV`, `CSV_WITH_HEADER`, `JSON`.
  fileFormat?: string;

  // The identifier of the index for a FAQ.
  indexId?: string;

  // The code for a language. This shows a supported language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html).
  languageCode?: string;

  // The name that should be associated with the FAQ.
  name?: string;

  // The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see [IAM Roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
  roleArn?: string;
}
export class Faq extends Resource {
  // The date and time that the FAQ was last updated.
  public updatedAt?: string;

  // The file format used by the input files for the FAQ. Valid Values are `CSV`, `CSV_WITH_HEADER`, `JSON`.
  public fileFormat?: string;

  // The identifier of the index for a FAQ.
  public indexId?: string;

  /*
The S3 location of the FAQ input data. Detailed below.

The `s3_path` configuration block supports the following arguments:
*/
  public s3Path?: kendra_FaqS3Path;

  // The code for a language. This shows a supported language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html).
  public languageCode?: string;

  // The name that should be associated with the FAQ.
  public name?: string;

  // The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see [IAM Roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
  public roleArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The description for a FAQ.
  public description?: string;

  // When the Status field value is `FAILED`, this contains a message that explains why.
  public errorMessage?: string;

  // The identifier of the FAQ.
  public faqId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the FAQ.
  public arn?: string;

  // The Unix datetime that the FAQ was created.
  public createdAt?: string;

  // The status of the FAQ. It is ready to use when the status is ACTIVE.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "indexId",
        "The identifier of the index for a FAQ.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "The code for a language. This shows a supported language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name that should be associated with the FAQ.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see [IAM Roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "s3Path",
        "The S3 location of the FAQ input data. Detailed below.\n\nThe `s3_path` configuration block supports the following arguments:",
        kendra_FaqS3Path_GetTypes(),
        true,
        true,
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
        InputType.String,
        "description",
        "The description for a FAQ.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fileFormat",
        "The file format used by the input files for the FAQ. Valid Values are `CSV`, `CSV_WITH_HEADER`, `JSON`.",
        [],
        false,
        true,
      ),
    ];
  }
}
