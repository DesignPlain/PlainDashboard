import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface WorkspaceServiceAccountArgs {
  // The permission level to use for this service account. For more information about the roles and the permissions each has, see the [User roles](https://docs.aws.amazon.com/grafana/latest/userguide/Grafana-user-roles.html) documentation.
  grafanaRole?: string;

  // A name for the service account. The name must be unique within the workspace, as it determines the ID associated with the service account.
  name?: string;

  // The Grafana workspace with which the service account is associated.
  workspaceId?: string;
}
export class WorkspaceServiceAccount extends DS_Resource {
  // The permission level to use for this service account. For more information about the roles and the permissions each has, see the [User roles](https://docs.aws.amazon.com/grafana/latest/userguide/Grafana-user-roles.html) documentation.
  public grafanaRole?: string;

  // A name for the service account. The name must be unique within the workspace, as it determines the ID associated with the service account.
  public name?: string;

  // Identifier of the service account in the given Grafana workspace
  public serviceAccountId?: string;

  // The Grafana workspace with which the service account is associated.
  public workspaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'workspaceId',
        'The Grafana workspace with which the service account is associated.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'grafanaRole',
        'The permission level to use for this service account. For more information about the roles and the permissions each has, see the [User roles](https://docs.aws.amazon.com/grafana/latest/userguide/Grafana-user-roles.html) documentation.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A name for the service account. The name must be unique within the workspace, as it determines the ID associated with the service account.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
