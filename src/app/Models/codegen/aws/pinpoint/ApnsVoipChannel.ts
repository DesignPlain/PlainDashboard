import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ApnsVoipChannelArgs {
  // The ID assigned to your signing key. To find this value, choose Certificates, IDs & Profiles, and choose your key in the Keys section.
  tokenKeyId?: string;

  // The application ID.
  applicationId?: string;

  // The ID assigned to your iOS app. To find this value, choose Certificates, IDs & Profiles, choose App IDs in the Identifiers section, and choose your app.
  bundleId?: string;

  // The pem encoded TLS Certificate from Apple.
  certificate?: string;

  // The ID assigned to your Apple developer account team. This value is provided on the Membership page.
  teamId?: string;

  // The `.p8` file that you download from your Apple developer account when you create an authentication key.
  tokenKey?: string;

  /*
The default authentication method used for APNs.
__NOTE__: Amazon Pinpoint uses this default for every APNs push notification that you send using the console.
You can override the default when you send a message programmatically using the Amazon Pinpoint API, the AWS CLI, or an AWS SDK.
If your default authentication type fails, Amazon Pinpoint doesn't attempt to use the other authentication type.

One of the following sets of credentials is also required.

If you choose to use __Certificate credentials__ you will have to provide:
*/
  defaultAuthenticationMethod?: string;

  // Whether the channel is enabled or disabled. Defaults to `true`.
  enabled?: boolean;

  /*
The Certificate Private Key file (ie. `.key` file).

If you choose to use __Key credentials__ you will have to provide:
*/
  privateKey?: string;
}
export class ApnsVoipChannel extends DS_Resource {
  // The application ID.
  public applicationId?: string;

  /*
The default authentication method used for APNs.
__NOTE__: Amazon Pinpoint uses this default for every APNs push notification that you send using the console.
You can override the default when you send a message programmatically using the Amazon Pinpoint API, the AWS CLI, or an AWS SDK.
If your default authentication type fails, Amazon Pinpoint doesn't attempt to use the other authentication type.

One of the following sets of credentials is also required.

If you choose to use __Certificate credentials__ you will have to provide:
*/
  public defaultAuthenticationMethod?: string;

  /*
The Certificate Private Key file (ie. `.key` file).

If you choose to use __Key credentials__ you will have to provide:
*/
  public privateKey?: string;

  // The ID assigned to your Apple developer account team. This value is provided on the Membership page.
  public teamId?: string;

  // The `.p8` file that you download from your Apple developer account when you create an authentication key.
  public tokenKey?: string;

  // The ID assigned to your iOS app. To find this value, choose Certificates, IDs & Profiles, choose App IDs in the Identifiers section, and choose your app.
  public bundleId?: string;

  // The pem encoded TLS Certificate from Apple.
  public certificate?: string;

  // Whether the channel is enabled or disabled. Defaults to `true`.
  public enabled?: boolean;

  // The ID assigned to your signing key. To find this value, choose Certificates, IDs & Profiles, and choose your key in the Keys section.
  public tokenKeyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'tokenKey',
        'The `.p8` file that you download from your Apple developer account when you create an authentication key.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultAuthenticationMethod',
        "The default authentication method used for APNs.\n__NOTE__: Amazon Pinpoint uses this default for every APNs push notification that you send using the console.\nYou can override the default when you send a message programmatically using the Amazon Pinpoint API, the AWS CLI, or an AWS SDK.\nIf your default authentication type fails, Amazon Pinpoint doesn't attempt to use the other authentication type.\n\nOne of the following sets of credentials is also required.\n\nIf you choose to use __Certificate credentials__ you will have to provide:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'Whether the channel is enabled or disabled. Defaults to `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tokenKeyId',
        'The ID assigned to your signing key. To find this value, choose Certificates, IDs & Profiles, and choose your key in the Keys section.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bundleId',
        'The ID assigned to your iOS app. To find this value, choose Certificates, IDs & Profiles, choose App IDs in the Identifiers section, and choose your app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'certificate',
        'The pem encoded TLS Certificate from Apple.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'teamId',
        'The ID assigned to your Apple developer account team. This value is provided on the Membership page.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'privateKey',
        'The Certificate Private Key file (ie. `.key` file).\n\nIf you choose to use __Key credentials__ you will have to provide:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'applicationId',
        'The application ID.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
