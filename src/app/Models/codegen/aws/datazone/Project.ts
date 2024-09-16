import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datazone_ProjectTimeouts,
  datazone_ProjectTimeouts_GetTypes,
} from '../types/datazone_ProjectTimeouts';
import {
  datazone_ProjectFailureReason,
  datazone_ProjectFailureReason_GetTypes,
} from '../types/datazone_ProjectFailureReason';

export interface ProjectArgs {
  // Optional flag to delete all child entities within the project.
  skipDeletionCheck?: boolean;

  //
  timeouts?: datazone_ProjectTimeouts;

  // Description of project.
  description?: string;

  // Identifier of domain which the project is part of. Must follow the regex of `^dzd[-_][a-zA-Z0-9_-]{1,36}$`.
  domainIdentifier?: string;

  // List of glossary terms that can be used in the project. The list cannot be empty or include over 20 values. Each value must follow the regex of `[a-zA-Z0-9_-]{1,36}$`.
  glossaryTerms?: Array<string>;

  /*
Name of the project. Must follow the regex of `^[\w -]+$`. and have a length of at most 64.

The following arguments are optional:
*/
  name?: string;
}
export class Project extends DS_Resource {
  // List of glossary terms that can be used in the project. The list cannot be empty or include over 20 values. Each value must follow the regex of `[a-zA-Z0-9_-]{1,36}$`.
  public glossaryTerms?: Array<string>;

  /*
Name of the project. Must follow the regex of `^[\w -]+$`. and have a length of at most 64.

The following arguments are optional:
*/
  public name?: string;

  // Optional flag to delete all child entities within the project.
  public skipDeletionCheck?: boolean;

  // Timestamp of when the project was made.
  public createdAt?: string;

  // Description of project.
  public description?: string;

  // Identifier of domain which the project is part of. Must follow the regex of `^dzd[-_][a-zA-Z0-9_-]{1,36}$`.
  public domainIdentifier?: string;

  // List of error messages if operation cannot be completed.
  public failureReasons?: Array<datazone_ProjectFailureReason>;

  // Creator of the project.
  public createdBy?: string;

  // Timestamp of when the project was last updated.
  public lastUpdatedAt?: string;

  // Enum that conveys state of project. Can be `ACTIVE`, `DELETING`, or `DELETE_FAILED`.
  public projectStatus?: string;

  //
  public timeouts?: datazone_ProjectTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the project. Must follow the regex of `^[\\w -]+$`. and have a length of at most 64.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'skipDeletionCheck',
        'Optional flag to delete all child entities within the project.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => datazone_ProjectTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of project.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainIdentifier',
        'Identifier of domain which the project is part of. Must follow the regex of `^dzd[-_][a-zA-Z0-9_-]{1,36}$`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'glossaryTerms',
        'List of glossary terms that can be used in the project. The list cannot be empty or include over 20 values. Each value must follow the regex of `[a-zA-Z0-9_-]{1,36}$`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
