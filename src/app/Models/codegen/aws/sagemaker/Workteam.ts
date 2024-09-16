import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_WorkteamMemberDefinition,
  sagemaker_WorkteamMemberDefinition_GetTypes,
} from '../types/sagemaker_WorkteamMemberDefinition';
import {
  sagemaker_WorkteamNotificationConfiguration,
  sagemaker_WorkteamNotificationConfiguration_GetTypes,
} from '../types/sagemaker_WorkteamNotificationConfiguration';
import {
  sagemaker_WorkteamWorkerAccessConfiguration,
  sagemaker_WorkteamWorkerAccessConfiguration_GetTypes,
} from '../types/sagemaker_WorkteamWorkerAccessConfiguration';

export interface WorkteamArgs {
  // A description of the work team.
  description?: string;

  // A list of Member Definitions that contains objects that identify the workers that make up the work team. Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `cognito_member_definition`. For workforces created using your own OIDC identity provider (IdP) use `oidc_member_definition`. Do not provide input for both of these parameters in a single request. see Member Definition details below.
  memberDefinitions?: Array<sagemaker_WorkteamMemberDefinition>;

  // Configures notification of workers regarding available or expiring work items. see Notification Configuration details below.
  notificationConfiguration?: sagemaker_WorkteamNotificationConfiguration;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL. see Worker Access Configuration details below.
  workerAccessConfiguration?: sagemaker_WorkteamWorkerAccessConfiguration;

  // The name of the Workteam (must be unique).
  workforceName?: string;

  // The name of the workforce.
  workteamName?: string;
}
export class Workteam extends DS_Resource {
  // Configures notification of workers regarding available or expiring work items. see Notification Configuration details below.
  public notificationConfiguration?: sagemaker_WorkteamNotificationConfiguration;

  // The subdomain for your OIDC Identity Provider.
  public subdomain?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The name of the Workteam (must be unique).
  public workforceName?: string;

  // The name of the workforce.
  public workteamName?: string;

  // The Amazon Resource Name (ARN) assigned by AWS to this Workteam.
  public arn?: string;

  // A description of the work team.
  public description?: string;

  // A list of Member Definitions that contains objects that identify the workers that make up the work team. Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `cognito_member_definition`. For workforces created using your own OIDC identity provider (IdP) use `oidc_member_definition`. Do not provide input for both of these parameters in a single request. see Member Definition details below.
  public memberDefinitions?: Array<sagemaker_WorkteamMemberDefinition>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL. see Worker Access Configuration details below.
  public workerAccessConfiguration?: sagemaker_WorkteamWorkerAccessConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'notificationConfiguration',
        'Configures notification of workers regarding available or expiring work items. see Notification Configuration details below.',
        () => sagemaker_WorkteamNotificationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'workerAccessConfiguration',
        'Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL. see Worker Access Configuration details below.',
        () => sagemaker_WorkteamWorkerAccessConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'workforceName',
        'The name of the Workteam (must be unique).',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'workteamName',
        'The name of the workforce.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the work team.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'memberDefinitions',
        'A list of Member Definitions that contains objects that identify the workers that make up the work team. Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `cognito_member_definition`. For workforces created using your own OIDC identity provider (IdP) use `oidc_member_definition`. Do not provide input for both of these parameters in a single request. see Member Definition details below.',
        () => sagemaker_WorkteamMemberDefinition_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
