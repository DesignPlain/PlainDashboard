import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datazone_FormTypeModel,
  datazone_FormTypeModel_GetTypes,
} from '../types/datazone_FormTypeModel';
import {
  datazone_FormTypeImport,
  datazone_FormTypeImport_GetTypes,
} from '../types/datazone_FormTypeImport';
import {
  datazone_FormTypeTimeouts,
  datazone_FormTypeTimeouts_GetTypes,
} from '../types/datazone_FormTypeTimeouts';

export interface FormTypeArgs {
  // Name of the form type. Must be the name of the structure in smithy document.
  name?: string;

  // Identifier of project that owns the form type. Must follow regex of ^[a-zA-Z0-9_-]{1,36}.
  owningProjectIdentifier?: string;

  //
  status?: string;

  //
  timeouts?: datazone_FormTypeTimeouts;

  // Description of form type. Must have a length of between 1 and 2048 characters.
  description?: string;

  // Identifier of the domain.
  domainIdentifier?: string;

  // Object of the model of the form type that contains the following attributes.
  model?: datazone_FormTypeModel;
}
export class FormType extends DS_Resource {
  // Revision of the Form Type.
  public revision?: string;

  // Creation time of the Form Type.
  public createdAt?: string;

  // Creator of the Form Type.
  public createdBy?: string;

  // Identifier of the domain.
  public domainIdentifier?: string;

  // Object of the model of the form type that contains the following attributes.
  public model?: datazone_FormTypeModel;

  // Origin project id of the Form Type.
  public originProjectId?: string;

  //
  public status?: string;

  //
  public timeouts?: datazone_FormTypeTimeouts;

  // Description of form type. Must have a length of between 1 and 2048 characters.
  public description?: string;

  //
  public imports?: Array<datazone_FormTypeImport>;

  // Name of the form type. Must be the name of the structure in smithy document.
  public name?: string;

  // Origin domain id of the Form Type.
  public originDomainId?: string;

  // Identifier of project that owns the form type. Must follow regex of ^[a-zA-Z0-9_-]{1,36}.
  public owningProjectIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of form type. Must have a length of between 1 and 2048 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainIdentifier',
        'Identifier of the domain.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'model',
        'Object of the model of the form type that contains the following attributes.',
        () => datazone_FormTypeModel_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the form type. Must be the name of the structure in smithy document.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'owningProjectIdentifier',
        'Identifier of project that owns the form type. Must follow regex of ^[a-zA-Z0-9_-]{1,36}.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'status',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => datazone_FormTypeTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
