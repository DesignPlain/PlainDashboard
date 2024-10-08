import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ModelArgs {
  // API identifier.
  apiId?: string;

  // The content-type for the model, for example, `application/json`. Must be between 1 and 256 characters in length.
  contentType?: string;

  // Description of the model. Must be between 1 and 128 characters in length.
  description?: string;

  // Name of the model. Must be alphanumeric. Must be between 1 and 128 characters in length.
  name?: string;

  // Schema for the model. This should be a [JSON schema draft 4](https://tools.ietf.org/html/draft-zyp-json-schema-04) model. Must be less than or equal to 32768 characters in length.
  schema?: string;
}
export class Model extends DS_Resource {
  // The content-type for the model, for example, `application/json`. Must be between 1 and 256 characters in length.
  public contentType?: string;

  // Description of the model. Must be between 1 and 128 characters in length.
  public description?: string;

  // Name of the model. Must be alphanumeric. Must be between 1 and 128 characters in length.
  public name?: string;

  // Schema for the model. This should be a [JSON schema draft 4](https://tools.ietf.org/html/draft-zyp-json-schema-04) model. Must be less than or equal to 32768 characters in length.
  public schema?: string;

  // API identifier.
  public apiId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'apiId',
        'API identifier.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'contentType',
        'The content-type for the model, for example, `application/json`. Must be between 1 and 256 characters in length.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the model. Must be between 1 and 128 characters in length.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the model. Must be alphanumeric. Must be between 1 and 128 characters in length.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'schema',
        'Schema for the model. This should be a [JSON schema draft 4](https://tools.ietf.org/html/draft-zyp-json-schema-04) model. Must be less than or equal to 32768 characters in length.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
