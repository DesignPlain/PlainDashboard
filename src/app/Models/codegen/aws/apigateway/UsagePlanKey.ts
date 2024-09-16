import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UsagePlanKeyArgs {
  // Id of the usage plan resource representing to associate the key to.
  usagePlanId?: string;

  // Identifier of the API key resource.
  keyId?: string;

  // Type of the API key resource. Currently, the valid key type is API_KEY.
  keyType?: string;
}
export class UsagePlanKey extends DS_Resource {
  // Identifier of the API key resource.
  public keyId?: string;

  // Type of the API key resource. Currently, the valid key type is API_KEY.
  public keyType?: string;

  // Name of a usage plan key.
  public name?: string;

  // Id of the usage plan resource representing to associate the key to.
  public usagePlanId?: string;

  // Value of a usage plan key.
  public value?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'usagePlanId',
        'Id of the usage plan resource representing to associate the key to.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'keyId',
        'Identifier of the API key resource.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'keyType',
        'Type of the API key resource. Currently, the valid key type is API_KEY.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
