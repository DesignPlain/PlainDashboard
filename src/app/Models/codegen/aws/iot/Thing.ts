import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ThingArgs {
  // Map of attributes of the thing.
  attributes?: Map<string, string>;

  // The name of the thing.
  name?: string;

  // The thing type name.
  thingTypeName?: string;
}
export class Thing extends DS_Resource {
  // The ARN of the thing.
  public arn?: string;

  // Map of attributes of the thing.
  public attributes?: Map<string, string>;

  // The default client ID.
  public defaultClientId?: string;

  // The name of the thing.
  public name?: string;

  // The thing type name.
  public thingTypeName?: string;

  // The current version of the thing record in the registry.
  public version?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the thing.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'thingTypeName',
        'The thing type name.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'attributes',
        'Map of attributes of the thing.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
