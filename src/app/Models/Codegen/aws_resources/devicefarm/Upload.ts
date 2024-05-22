import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UploadArgs {
  // The upload's content type (for example, application/octet-stream).
  contentType?: string;

  // The upload's file name. The name should not contain any forward slashes (/). If you are uploading an iOS app, the file name must end with the .ipa extension. If you are uploading an Android app, the file name must end with the .apk extension. For all others, the file name must end with the .zip file extension.
  name?: string;

  // The ARN of the project for the upload.
  projectArn?: string;

  // The upload's upload type. See [AWS Docs](https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html#API_CreateUpload_RequestSyntax) for valid list of values.
  type?: string;
}
export class Upload extends Resource {
  // The upload's upload type. See [AWS Docs](https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html#API_CreateUpload_RequestSyntax) for valid list of values.
  public type?: string;

  // The presigned Amazon S3 URL that was used to store a file using a PUT request.
  public url?: string;

  // The Amazon Resource Name of this upload.
  public arn?: string;

  // The upload's category.
  public category?: string;

  // The upload's content type (for example, application/octet-stream).
  public contentType?: string;

  // The upload's metadata. For example, for Android, this contains information that is parsed from the manifest and is displayed in the AWS Device Farm console after the associated app is uploaded.
  public metadata?: string;

  // The upload's file name. The name should not contain any forward slashes (/). If you are uploading an iOS app, the file name must end with the .ipa extension. If you are uploading an Android app, the file name must end with the .apk extension. For all others, the file name must end with the .zip file extension.
  public name?: string;

  // The ARN of the project for the upload.
  public projectArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "contentType",
        "The upload's content type (for example, application/octet-stream).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The upload's file name. The name should not contain any forward slashes (/). If you are uploading an iOS app, the file name must end with the .ipa extension. If you are uploading an Android app, the file name must end with the .apk extension. For all others, the file name must end with the .zip file extension.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectArn",
        "The ARN of the project for the upload.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The upload's upload type. See [AWS Docs](https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html#API_CreateUpload_RequestSyntax) for valid list of values.",
        [],
        true,
        true,
      ),
    ];
  }
}
