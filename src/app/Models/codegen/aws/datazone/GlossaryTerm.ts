import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datazone_GlossaryTermTermRelations,
  datazone_GlossaryTermTermRelations_GetTypes,
} from '../types/datazone_GlossaryTermTermRelations';
import {
  datazone_GlossaryTermTimeouts,
  datazone_GlossaryTermTimeouts_GetTypes,
} from '../types/datazone_GlossaryTermTimeouts';

export interface GlossaryTermArgs {
  // Identifier of domain.
  domainIdentifier?: string;

  // Identifier of glossary.
  glossaryIdentifier?: string;

  // Long description of entry.
  longDescription?: string;

  /*
Name of glossary term.

The following arguments are optional:
*/
  name?: string;

  // Short description of entry.
  shortDescription?: string;

  // If glossary term is ENABLED or DISABLED.
  status?: string;

  // Object classifying the term relations through the following attributes:
  termRelations?: datazone_GlossaryTermTermRelations;

  //
  timeouts?: datazone_GlossaryTermTimeouts;
}
export class GlossaryTerm extends DS_Resource {
  // Identifier of domain.
  public domainIdentifier?: string;

  // Identifier of glossary.
  public glossaryIdentifier?: string;

  // Long description of entry.
  public longDescription?: string;

  /*
Name of glossary term.

The following arguments are optional:
*/
  public name?: string;

  // Short description of entry.
  public shortDescription?: string;

  // If glossary term is ENABLED or DISABLED.
  public status?: string;

  // Time of glossary term creation.
  public createdAt?: string;

  // Creator of glossary term.
  public createdBy?: string;

  // Object classifying the term relations through the following attributes:
  public termRelations?: datazone_GlossaryTermTermRelations;

  //
  public timeouts?: datazone_GlossaryTermTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'glossaryIdentifier',
        'Identifier of glossary.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'longDescription',
        'Long description of entry.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of glossary term.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'shortDescription',
        'Short description of entry.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'status',
        'If glossary term is ENABLED or DISABLED.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'termRelations',
        'Object classifying the term relations through the following attributes:',
        () => datazone_GlossaryTermTermRelations_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => datazone_GlossaryTermTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainIdentifier',
        'Identifier of domain.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
