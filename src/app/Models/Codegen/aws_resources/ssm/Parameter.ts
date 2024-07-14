import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ParameterArgs {
  // Regular expression used to validate the parameter value.
  allowedPattern?: string;

  // Data type of the parameter. Valid values: `text`, `aws:ssm:integration` and `aws:ec2:image` for AMI format, see the [Native parameter support for Amazon Machine Image IDs](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-ec2-aliases.html).
  dataType?: string;

  // Description of the parameter.
  description?: string;

  // KMS key ID or ARN for encrypting a SecureString.
  keyId?: string;

  // Overwrite an existing parameter. If not specified, defaults to `false` if the resource has not been created by Pulumi to avoid overwrite of existing resource, and will default to `true` otherwise (Pulumi lifecycle rules should then be used to manage the update behavior).
  overwrite?: boolean;

  /*
Value of the parameter. This value is always marked as sensitive in the pulumi preview output, regardless of `type`.

> --NOTE:-- `aws:ssm:integration` data_type parameters must be of the type `SecureString` and the name must start with the prefix `/d9d01087-4a3f-49e0-b0b4-d568d7826553/ssm/integrations/webhook/`. See [here](https://docs.aws.amazon.com/systems-manager/latest/userguide/creating-integrations.html) for information on the usage of `aws:ssm:integration` parameters.
*/
  value?: string;

  // ARN of the parameter.
  arn?: string;

  // Value of the parameter. --Use caution:-- This value is _never_ marked as sensitive in the pulumi preview output. This argument is not valid with a `type` of `SecureString`.
  insecureValue?: string;

  // Name of the parameter. If the name contains a path (e.g., any forward slashes (`/`)), it must be fully qualified with a leading forward slash (`/`). For additional requirements and constraints, see the [AWS SSM User Guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html).
  name?: string;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Parameter tier to assign to the parameter. If not specified, will use the default parameter tier for the region. Valid tiers are `Standard`, `Advanced`, and `Intelligent-Tiering`. Downgrading an `Advanced` tier parameter to `Standard` will recreate the resource. For more information on parameter tiers, see the [AWS SSM Parameter tier comparison and guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html).
  tier?: string;

  /*
Type of the parameter. Valid types are `String`, `StringList` and `SecureString`.

The following arguments are optional:
*/
  type?: string;
}
export class Parameter extends Resource {
  // Value of the parameter. --Use caution:-- This value is _never_ marked as sensitive in the pulumi preview output. This argument is not valid with a `type` of `SecureString`.
  public insecureValue?: string;

  // Name of the parameter. If the name contains a path (e.g., any forward slashes (`/`)), it must be fully qualified with a leading forward slash (`/`). For additional requirements and constraints, see the [AWS SSM User Guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html).
  public name?: string;

  // Parameter tier to assign to the parameter. If not specified, will use the default parameter tier for the region. Valid tiers are `Standard`, `Advanced`, and `Intelligent-Tiering`. Downgrading an `Advanced` tier parameter to `Standard` will recreate the resource. For more information on parameter tiers, see the [AWS SSM Parameter tier comparison and guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html).
  public tier?: string;

  // KMS key ID or ARN for encrypting a SecureString.
  public keyId?: string;

  // Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
Type of the parameter. Valid types are `String`, `StringList` and `SecureString`.

The following arguments are optional:
*/
  public type?: string;

  // Version of the parameter.
  public version?: number;

  // Description of the parameter.
  public description?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Regular expression used to validate the parameter value.
  public allowedPattern?: string;

  // ARN of the parameter.
  public arn?: string;

  // Data type of the parameter. Valid values: `text`, `aws:ssm:integration` and `aws:ec2:image` for AMI format, see the [Native parameter support for Amazon Machine Image IDs](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-ec2-aliases.html).
  public dataType?: string;

  // Overwrite an existing parameter. If not specified, defaults to `false` if the resource has not been created by Pulumi to avoid overwrite of existing resource, and will default to `true` otherwise (Pulumi lifecycle rules should then be used to manage the update behavior).
  public overwrite?: boolean;

  /*
Value of the parameter. This value is always marked as sensitive in the pulumi preview output, regardless of `type`.

> --NOTE:-- `aws:ssm:integration` data_type parameters must be of the type `SecureString` and the name must start with the prefix `/d9d01087-4a3f-49e0-b0b4-d568d7826553/ssm/integrations/webhook/`. See [here](https://docs.aws.amazon.com/systems-manager/latest/userguide/creating-integrations.html) for information on the usage of `aws:ssm:integration` parameters.
*/
  public value?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "insecureValue",
        "Value of the parameter. **Use caution:** This value is _never_ marked as sensitive in the pulumi preview output. This argument is not valid with a `type` of `SecureString`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the parameter. If the name contains a path (e.g., any forward slashes (`/`)), it must be fully qualified with a leading forward slash (`/`). For additional requirements and constraints, see the [AWS SSM User Guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the object. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tier",
        "Parameter tier to assign to the parameter. If not specified, will use the default parameter tier for the region. Valid tiers are `Standard`, `Advanced`, and `Intelligent-Tiering`. Downgrading an `Advanced` tier parameter to `Standard` will recreate the resource. For more information on parameter tiers, see the [AWS SSM Parameter tier comparison and guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "allowedPattern",
        "Regular expression used to validate the parameter value.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the parameter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "overwrite",
        "Overwrite an existing parameter. If not specified, defaults to `false` if the resource has not been created by Pulumi to avoid overwrite of existing resource, and will default to `true` otherwise (Pulumi lifecycle rules should then be used to manage the update behavior).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "value",
        "Value of the parameter. This value is always marked as sensitive in the pulumi preview output, regardless of `type`.\n\n> **NOTE:** `aws:ssm:integration` data_type parameters must be of the type `SecureString` and the name must start with the prefix `/d9d01087-4a3f-49e0-b0b4-d568d7826553/ssm/integrations/webhook/`. See [here](https://docs.aws.amazon.com/systems-manager/latest/userguide/creating-integrations.html) for information on the usage of `aws:ssm:integration` parameters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataType",
        "Data type of the parameter. Valid values: `text`, `aws:ssm:integration` and `aws:ec2:image` for AMI format, see the [Native parameter support for Amazon Machine Image IDs](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-ec2-aliases.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyId",
        "KMS key ID or ARN for encrypting a SecureString.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "arn",
        "ARN of the parameter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the parameter. Valid types are `String`, `StringList` and `SecureString`.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
    ];
  }
}
