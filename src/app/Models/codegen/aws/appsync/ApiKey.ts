import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ApiKeyArgs {
  // ID of the associated AppSync API
  apiId?: string;

  // API key description. Defaults to "Managed by Pulumi".
  description?: string;

  // RFC3339 string representation of the expiry date. Rounded down to nearest hour. By default, it is 7 days from the date of creation.
  expires?: string;
}
export class ApiKey extends DS_Resource {
  // ID of the associated AppSync API
  public apiId?: string;

  //
  public apiKeyId?: string;

  // API key description. Defaults to "Managed by Pulumi".
  public description?: string;

  // RFC3339 string representation of the expiry date. Rounded down to nearest hour. By default, it is 7 days from the date of creation.
  public expires?: string;

  // API key
  public key?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'expires',
        'RFC3339 string representation of the expiry date. Rounded down to nearest hour. By default, it is 7 days from the date of creation.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'apiId',
        'ID of the associated AppSync API',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'API key description. Defaults to "Managed by Pulumi".',
        () => [],
        false,
        false,
      ),
    ];
  }
}
