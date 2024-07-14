import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TrustStoreRevocationArgs {
  // S3 Bucket name holding the client certificate CA bundle.
  revocationsS3Bucket?: string;

  // S3 object key holding the client certificate CA bundle.
  revocationsS3Key?: string;

  // Version Id of CA bundle S3 bucket object, if versioned, defaults to latest if omitted.
  revocationsS3ObjectVersion?: string;

  // Trust Store ARN.
  trustStoreArn?: string;
}
export class TrustStoreRevocation extends Resource {
  // AWS assigned RevocationId, (number).
  public revocationId?: number;

  // S3 Bucket name holding the client certificate CA bundle.
  public revocationsS3Bucket?: string;

  // S3 object key holding the client certificate CA bundle.
  public revocationsS3Key?: string;

  // Version Id of CA bundle S3 bucket object, if versioned, defaults to latest if omitted.
  public revocationsS3ObjectVersion?: string;

  // Trust Store ARN.
  public trustStoreArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "revocationsS3Key",
        "S3 object key holding the client certificate CA bundle.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "revocationsS3ObjectVersion",
        "Version Id of CA bundle S3 bucket object, if versioned, defaults to latest if omitted.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "trustStoreArn",
        "Trust Store ARN.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "revocationsS3Bucket",
        "S3 Bucket name holding the client certificate CA bundle.",
        [],
        true,
        true,
      ),
    ];
  }
}
