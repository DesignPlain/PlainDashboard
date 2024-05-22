import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LayerVersionPermissionArgs {
  // Action, which will be allowed. `lambda:GetLayerVersion` value is suggested by AWS documantation.
  action?: string;

  // The name or ARN of the Lambda Layer, which you want to grant access to.
  layerName?: string;

  // An identifier of AWS Organization, which should be able to use your Lambda Layer. `principal` should be equal to `-` if `organization_id` provided.
  organizationId?: string;

  // AWS account ID which should be able to use your Lambda Layer. `-` can be used here, if you want to share your Lambda Layer widely.
  principal?: string;

  // Whether to retain the old version of a previously deployed Lambda Layer. Default is `false`. When this is not set to `true`, changing any of `compatible_architectures`, `compatible_runtimes`, `description`, `filename`, `layer_name`, `license_info`, `s3_bucket`, `s3_key`, `s3_object_version`, or `source_code_hash` forces deletion of the existing layer version and creation of a new layer version.
  skipDestroy?: boolean;

  // The name of Lambda Layer Permission, for example `dev-account` - human readable note about what is this permission for.
  statementId?: string;

  // Version of Lambda Layer, which you want to grant access to. Note: permissions only apply to a single version of a layer.
  versionNumber?: number;
}
export class LayerVersionPermission extends Resource {
  // Version of Lambda Layer, which you want to grant access to. Note: permissions only apply to a single version of a layer.
  public versionNumber?: number;

  // Action, which will be allowed. `lambda:GetLayerVersion` value is suggested by AWS documantation.
  public action?: string;

  // The name or ARN of the Lambda Layer, which you want to grant access to.
  public layerName?: string;

  // An identifier of AWS Organization, which should be able to use your Lambda Layer. `principal` should be equal to `-` if `organization_id` provided.
  public organizationId?: string;

  // Full Lambda Layer Permission policy.
  public policy?: string;

  // AWS account ID which should be able to use your Lambda Layer. `-` can be used here, if you want to share your Lambda Layer widely.
  public principal?: string;

  // A unique identifier for the current revision of the policy.
  public revisionId?: string;

  // Whether to retain the old version of a previously deployed Lambda Layer. Default is `false`. When this is not set to `true`, changing any of `compatible_architectures`, `compatible_runtimes`, `description`, `filename`, `layer_name`, `license_info`, `s3_bucket`, `s3_key`, `s3_object_version`, or `source_code_hash` forces deletion of the existing layer version and creation of a new layer version.
  public skipDestroy?: boolean;

  // The name of Lambda Layer Permission, for example `dev-account` - human readable note about what is this permission for.
  public statementId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "action",
        "Action, which will be allowed. `lambda:GetLayerVersion` value is suggested by AWS documantation.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "layerName",
        "The name or ARN of the Lambda Layer, which you want to grant access to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "organizationId",
        "An identifier of AWS Organization, which should be able to use your Lambda Layer. `principal` should be equal to `*` if `organization_id` provided.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principal",
        "AWS account ID which should be able to use your Lambda Layer. `*` can be used here, if you want to share your Lambda Layer widely.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "Whether to retain the old version of a previously deployed Lambda Layer. Default is `false`. When this is not set to `true`, changing any of `compatible_architectures`, `compatible_runtimes`, `description`, `filename`, `layer_name`, `license_info`, `s3_bucket`, `s3_key`, `s3_object_version`, or `source_code_hash` forces deletion of the existing layer version and creation of a new layer version.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "statementId",
        "The name of Lambda Layer Permission, for example `dev-account` - human readable note about what is this permission for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "versionNumber",
        "Version of Lambda Layer, which you want to grant access to. Note: permissions only apply to a single version of a layer.",
        [],
        true,
        true,
      ),
    ];
  }
}
