import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appfabric_AppAuthorizationTimeouts,
  appfabric_AppAuthorizationTimeouts_GetTypes,
} from '../types/appfabric_AppAuthorizationTimeouts';
import {
  appfabric_AppAuthorizationCredential,
  appfabric_AppAuthorizationCredential_GetTypes,
} from '../types/appfabric_AppAuthorizationCredential';
import {
  appfabric_AppAuthorizationTenant,
  appfabric_AppAuthorizationTenant_GetTypes,
} from '../types/appfabric_AppAuthorizationTenant';

export interface AppAuthorizationArgs {
  //
  timeouts?: appfabric_AppAuthorizationTimeouts;

  // The name of the application for valid values see https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppAuthorization.html.
  app?: string;

  // The Amazon Resource Name (ARN) of the app bundle to use for the request.
  appBundleArn?: string;

  // The authorization type for the app authorization valid values are oauth2 and apiKey.
  authType?: string;

  /*
Contains credentials for the application, such as an API key or OAuth2 client ID and secret.
Specify credentials that match the authorization type for your request. For example, if the authorization type for your request is OAuth2 (oauth2), then you should provide only the OAuth2 credentials.
*/
  credential?: appfabric_AppAuthorizationCredential;

  //
  tags?: Map<string, string>;

  // Contains information about an application tenant, such as the application display name and identifier.
  tenants?: Array<appfabric_AppAuthorizationTenant>;
}
export class AppAuthorization extends DS_Resource {
  // The name of the application for valid values see https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppAuthorization.html.
  public app?: string;

  // The Amazon Resource Name (ARN) of the app bundle to use for the request.
  public appBundleArn?: string;

  // The authorization type for the app authorization valid values are oauth2 and apiKey.
  public authType?: string;

  /*
Contains credentials for the application, such as an API key or OAuth2 client ID and secret.
Specify credentials that match the authorization type for your request. For example, if the authorization type for your request is OAuth2 (oauth2), then you should provide only the OAuth2 credentials.
*/
  public credential?: appfabric_AppAuthorizationCredential;

  // The user persona of the app authorization.
  public persona?: string;

  //
  public tagsAll?: Map<string, string>;

  // Contains information about an application tenant, such as the application display name and identifier.
  public tenants?: Array<appfabric_AppAuthorizationTenant>;

  //
  public timeouts?: appfabric_AppAuthorizationTimeouts;

  // ARN of the App Authorization. Do not begin the description with "An", "The", "Defines", "Indicates", or "Specifies," as these are verbose. In other words, "Indicates the amount of storage," can be rewritten as "Amount of storage," without losing any information.
  public arn?: string;

  // The application URL for the OAuth flow.
  public authUrl?: string;

  //
  public createdAt?: string;

  //
  public tags?: Map<string, string>;

  //
  public updatedAt?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'appBundleArn',
        'The Amazon Resource Name (ARN) of the app bundle to use for the request.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'authType',
        'The authorization type for the app authorization valid values are oauth2 and apiKey.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'credential',
        'Contains credentials for the application, such as an API key or OAuth2 client ID and secret.\nSpecify credentials that match the authorization type for your request. For example, if the authorization type for your request is OAuth2 (oauth2), then you should provide only the OAuth2 credentials.',
        () => appfabric_AppAuthorizationCredential_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tenants',
        'Contains information about an application tenant, such as the application display name and identifier.',
        () => appfabric_AppAuthorizationTenant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => appfabric_AppAuthorizationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'app',
        'The name of the application for valid values see https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppAuthorization.html.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
