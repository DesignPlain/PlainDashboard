import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface GlossaryArgs {
  //
  domainIdentifier?: string;

  // Name of the glossary. Must have length between 1 and 256.
  name?: string;

  /*
ID of the project that owns business glossary. Must follow regex of ^[a-zA-Z0-9_-]{1,36}$.

The following arguments are optional:
*/
  owningProjectIdentifier?: string;

  // Status of business glossary. Valid values are DISABLED and ENABLED.
  status?: string;

  // Description of the glossary. Must have a length between 0 and 4096.
  description?: string;
}
export class Glossary extends DS_Resource {
  //
  public domainIdentifier?: string;

  // Name of the glossary. Must have length between 1 and 256.
  public name?: string;

  /*
ID of the project that owns business glossary. Must follow regex of ^[a-zA-Z0-9_-]{1,36}$.

The following arguments are optional:
*/
  public owningProjectIdentifier?: string;

  // Status of business glossary. Valid values are DISABLED and ENABLED.
  public status?: string;

  // Description of the glossary. Must have a length between 0 and 4096.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'domainIdentifier',
        '',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the glossary. Must have length between 1 and 256.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'owningProjectIdentifier',
        'ID of the project that owns business glossary. Must follow regex of ^[a-zA-Z0-9_-]{1,36}$.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'status',
        'Status of business glossary. Valid values are DISABLED and ENABLED.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the glossary. Must have a length between 0 and 4096.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
