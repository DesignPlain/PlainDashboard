import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResourceArgs {
  // ID of the parent API resource
  parentId?: string;

  // Last path segment of this API resource.
  pathPart?: string;

  // ID of the associated REST API
  restApi?: string;
}
export class Resource extends DS_Resource {
  // ID of the associated REST API
  public restApi?: string;

  // ID of the parent API resource
  public parentId?: string;

  // Complete path for this API resource, including all parent paths.
  public path?: string;

  // Last path segment of this API resource.
  public pathPart?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'parentId',
        'ID of the parent API resource',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'pathPart',
        'Last path segment of this API resource.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'restApi',
        'ID of the associated REST API',
        () => [],
        true,
        true,
      ),
    ];
  }
}
