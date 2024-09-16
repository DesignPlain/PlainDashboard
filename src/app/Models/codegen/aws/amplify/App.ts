import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  amplify_AppProductionBranch,
  amplify_AppProductionBranch_GetTypes,
} from '../types/amplify_AppProductionBranch';
import {
  amplify_AppAutoBranchCreationConfig,
  amplify_AppAutoBranchCreationConfig_GetTypes,
} from '../types/amplify_AppAutoBranchCreationConfig';
import {
  amplify_AppCustomRule,
  amplify_AppCustomRule_GetTypes,
} from '../types/amplify_AppCustomRule';

export interface AppArgs {
  // AWS Identity and Access Management (IAM) service role for an Amplify app.
  iamServiceRoleArn?: string;

  // Name for an Amplify app.
  name?: string;

  // Platform or framework for an Amplify app. Valid values: `WEB`, `WEB_COMPUTE`. Default value: `WEB`.
  platform?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Automated branch creation configuration for an Amplify app. An `auto_branch_creation_config` block is documented below.
  autoBranchCreationConfig?: amplify_AppAutoBranchCreationConfig;

  // Credentials for basic authorization for an Amplify app.
  basicAuthCredentials?: string;

  // The [build specification](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) (build spec) for an Amplify app.
  buildSpec?: string;

  // The [custom HTTP headers](https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html) for an Amplify app.
  customHeaders?: string;

  // Description for an Amplify app.
  description?: string;

  // Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.
  enableBranchAutoDeletion?: boolean;

  // Environment variables map for an Amplify app.
  environmentVariables?: Map<string, string>;

  // Automated branch creation glob patterns for an Amplify app.
  autoBranchCreationPatterns?: Array<string>;

  // Custom rewrite and redirect rules for an Amplify app. A `custom_rule` block is documented below.
  customRules?: Array<amplify_AppCustomRule>;

  // Enables automated branch creation for an Amplify app.
  enableAutoBranchCreation?: boolean;

  // Repository for an Amplify app.
  repository?: string;

  // Personal access token for a third-party source control system for an Amplify app. This token must have write access to the relevant repo to create a webhook and a read-only deploy key for the Amplify project. The token is not stored, so after applying this attribute can be removed and the setup token deleted.
  accessToken?: string;

  // Enables auto-building of branches for the Amplify App.
  enableBranchAutoBuild?: boolean;

  // OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored.
  oauthToken?: string;

  // Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.
  enableBasicAuth?: boolean;
}
export class App extends DS_Resource {
  // Environment variables map for an Amplify app.
  public environmentVariables?: Map<string, string>;

  // Describes the information about a production branch for an Amplify app. A `production_branch` block is documented below.
  public productionBranches?: Array<amplify_AppProductionBranch>;

  // Repository for an Amplify app.
  public repository?: string;

  // Enables automated branch creation for an Amplify app.
  public enableAutoBranchCreation?: boolean;

  // The [build specification](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) (build spec) for an Amplify app.
  public buildSpec?: string;

  // Custom rewrite and redirect rules for an Amplify app. A `custom_rule` block is documented below.
  public customRules?: Array<amplify_AppCustomRule>;

  // Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.
  public enableBasicAuth?: boolean;

  // Enables auto-building of branches for the Amplify App.
  public enableBranchAutoBuild?: boolean;

  // Automated branch creation configuration for an Amplify app. An `auto_branch_creation_config` block is documented below.
  public autoBranchCreationConfig?: amplify_AppAutoBranchCreationConfig;

  // Automated branch creation glob patterns for an Amplify app.
  public autoBranchCreationPatterns?: Array<string>;

  // The [custom HTTP headers](https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html) for an Amplify app.
  public customHeaders?: string;

  // Default domain for the Amplify app.
  public defaultDomain?: string;

  // Description for an Amplify app.
  public description?: string;

  // AWS Identity and Access Management (IAM) service role for an Amplify app.
  public iamServiceRoleArn?: string;

  // OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored.
  public oauthToken?: string;

  // Platform or framework for an Amplify app. Valid values: `WEB`, `WEB_COMPUTE`. Default value: `WEB`.
  public platform?: string;

  // Personal access token for a third-party source control system for an Amplify app. This token must have write access to the relevant repo to create a webhook and a read-only deploy key for the Amplify project. The token is not stored, so after applying this attribute can be removed and the setup token deleted.
  public accessToken?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Credentials for basic authorization for an Amplify app.
  public basicAuthCredentials?: string;

  // Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.
  public enableBranchAutoDeletion?: boolean;

  // Name for an Amplify app.
  public name?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Amplify app.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'enableAutoBranchCreation',
        'Enables automated branch creation for an Amplify app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'repository',
        'Repository for an Amplify app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'platform',
        'Platform or framework for an Amplify app. Valid values: `WEB`, `WEB_COMPUTE`. Default value: `WEB`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'buildSpec',
        'The [build specification](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) (build spec) for an Amplify app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableBranchAutoDeletion',
        'Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'customRules',
        'Custom rewrite and redirect rules for an Amplify app. A `custom_rule` block is documented below.',
        () => amplify_AppCustomRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableBasicAuth',
        'Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'oauthToken',
        'OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'iamServiceRoleArn',
        'AWS Identity and Access Management (IAM) service role for an Amplify app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name for an Amplify app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoBranchCreationConfig',
        'Automated branch creation configuration for an Amplify app. An `auto_branch_creation_config` block is documented below.',
        () => amplify_AppAutoBranchCreationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'customHeaders',
        'The [custom HTTP headers](https://docs.aws.amazon.com/amplify/latest/userguide/custom-headers.html) for an Amplify app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description for an Amplify app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'environmentVariables',
        'Environment variables map for an Amplify app.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'autoBranchCreationPatterns',
        'Automated branch creation glob patterns for an Amplify app.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'basicAuthCredentials',
        'Credentials for basic authorization for an Amplify app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'accessToken',
        'Personal access token for a third-party source control system for an Amplify app. This token must have write access to the relevant repo to create a webhook and a read-only deploy key for the Amplify project. The token is not stored, so after applying this attribute can be removed and the setup token deleted.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableBranchAutoBuild',
        'Enables auto-building of branches for the Amplify App.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
