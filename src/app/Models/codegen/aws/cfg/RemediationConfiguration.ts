import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cfg_RemediationConfigurationExecutionControls,
  cfg_RemediationConfigurationExecutionControls_GetTypes,
} from '../types/cfg_RemediationConfigurationExecutionControls';
import {
  cfg_RemediationConfigurationParameter,
  cfg_RemediationConfigurationParameter_GetTypes,
} from '../types/cfg_RemediationConfigurationParameter';

export interface RemediationConfigurationArgs {
  // Remediation is triggered automatically if `true`.
  automatic?: boolean;

  // Configuration block for execution controls. See below.
  executionControls?: cfg_RemediationConfigurationExecutionControls;

  // Maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.
  maximumAutomaticAttempts?: number;

  // Type of resource.
  resourceType?: string;

  // Maximum time in seconds that AWS Config runs auto-remediation. If you do not select a number, the default is 60 seconds.
  retryAttemptSeconds?: number;

  // Version of the target. For example, version of the SSM document
  targetVersion?: string;

  // Name of the AWS Config rule.
  configRuleName?: string;

  // Can be specified multiple times for each parameter. Each parameter block supports arguments below.
  parameters?: Array<cfg_RemediationConfigurationParameter>;

  // Target ID is the name of the public document.
  targetId?: string;

  /*
Type of the target. Target executes remediation. For example, SSM document.

The following arguments are optional:
*/
  targetType?: string;
}
export class RemediationConfiguration extends DS_Resource {
  // Version of the target. For example, version of the SSM document
  public targetVersion?: string;

  // ARN of the Config Remediation Configuration.
  public arn?: string;

  // Name of the AWS Config rule.
  public configRuleName?: string;

  // Configuration block for execution controls. See below.
  public executionControls?: cfg_RemediationConfigurationExecutionControls;

  // Maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.
  public maximumAutomaticAttempts?: number;

  // Can be specified multiple times for each parameter. Each parameter block supports arguments below.
  public parameters?: Array<cfg_RemediationConfigurationParameter>;

  // Type of resource.
  public resourceType?: string;

  // Target ID is the name of the public document.
  public targetId?: string;

  // Remediation is triggered automatically if `true`.
  public automatic?: boolean;

  // Maximum time in seconds that AWS Config runs auto-remediation. If you do not select a number, the default is 60 seconds.
  public retryAttemptSeconds?: number;

  /*
Type of the target. Target executes remediation. For example, SSM document.

The following arguments are optional:
*/
  public targetType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'automatic',
        'Remediation is triggered automatically if `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceType',
        'Type of resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetVersion',
        'Version of the target. For example, version of the SSM document',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'parameters',
        'Can be specified multiple times for each parameter. Each parameter block supports arguments below.',
        () => cfg_RemediationConfigurationParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetType',
        'Type of the target. Target executes remediation. For example, SSM document.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'executionControls',
        'Configuration block for execution controls. See below.',
        () => cfg_RemediationConfigurationExecutionControls_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maximumAutomaticAttempts',
        'Maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'retryAttemptSeconds',
        'Maximum time in seconds that AWS Config runs auto-remediation. If you do not select a number, the default is 60 seconds.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'configRuleName',
        'Name of the AWS Config rule.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetId',
        'Target ID is the name of the public document.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
