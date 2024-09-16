import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appfabric_AppAuthorizationConnectionTenant,
  appfabric_AppAuthorizationConnectionTenant_GetTypes,
} from '../types/appfabric_AppAuthorizationConnectionTenant';
import {
  appfabric_AppAuthorizationConnectionAuthRequest,
  appfabric_AppAuthorizationConnectionAuthRequest_GetTypes,
} from '../types/appfabric_AppAuthorizationConnectionAuthRequest';
import {
  appfabric_AppAuthorizationConnectionTimeouts,
  appfabric_AppAuthorizationConnectionTimeouts_GetTypes,
} from '../types/appfabric_AppAuthorizationConnectionTimeouts';

export interface AppAuthorizationConnectionArgs {
  // Contains OAuth2 authorization information.This is required if the app authorization for the request is configured with an OAuth2 (oauth2) authorization type.
  authRequest?: appfabric_AppAuthorizationConnectionAuthRequest;

  //
  timeouts?: appfabric_AppAuthorizationConnectionTimeouts;

  // The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
  appAuthorizationArn?: string;

  // The Amazon Resource Name (ARN) of the app bundle to use for the request.
  appBundleArn?: string;
}
export class AppAuthorizationConnection extends DS_Resource {
  // Contains information about an application tenant, such as the application display name and identifier.
  public tenants?: Array<appfabric_AppAuthorizationConnectionTenant>;

  //
  public timeouts?: appfabric_AppAuthorizationConnectionTimeouts;

  // The name of the application.
  public app?: string;

  // The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.
  public appAuthorizationArn?: string;

  // The Amazon Resource Name (ARN) of the app bundle to use for the request.
  public appBundleArn?: string;

  // Contains OAuth2 authorization information.This is required if the app authorization for the request is configured with an OAuth2 (oauth2) authorization type.
  public authRequest?: appfabric_AppAuthorizationConnectionAuthRequest;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'authRequest',
        'Contains OAuth2 authorization information.This is required if the app authorization for the request is configured with an OAuth2 (oauth2) authorization type.',
        () => appfabric_AppAuthorizationConnectionAuthRequest_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => appfabric_AppAuthorizationConnectionTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'appAuthorizationArn',
        'The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'appBundleArn',
        'The Amazon Resource Name (ARN) of the app bundle to use for the request.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
