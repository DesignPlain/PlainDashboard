import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AdmChannelArgs {
  // The application ID.
  applicationId?: string;

  // Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
  clientId?: string;

  // Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
  clientSecret?: string;

  // Specifies whether to enable the channel. Defaults to `true`.
  enabled?: boolean;
}
export class AdmChannel extends DS_Resource {
  // The application ID.
  public applicationId?: string;

  // Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
  public clientId?: string;

  // Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
  public clientSecret?: string;

  // Specifies whether to enable the channel. Defaults to `true`.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'applicationId',
        'The application ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clientId',
        'Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'clientSecret',
        'Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'Specifies whether to enable the channel. Defaults to `true`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
