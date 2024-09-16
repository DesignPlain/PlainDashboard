import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lex_V2modelsSlotTypeSlotTypeValues,
  lex_V2modelsSlotTypeSlotTypeValues_GetTypes,
} from '../types/lex_V2modelsSlotTypeSlotTypeValues';
import {
  lex_V2modelsSlotTypeExternalSourceSetting,
  lex_V2modelsSlotTypeExternalSourceSetting_GetTypes,
} from '../types/lex_V2modelsSlotTypeExternalSourceSetting';
import {
  lex_V2modelsSlotTypeTimeouts,
  lex_V2modelsSlotTypeTimeouts_GetTypes,
} from '../types/lex_V2modelsSlotTypeTimeouts';
import {
  lex_V2modelsSlotTypeValueSelectionSetting,
  lex_V2modelsSlotTypeValueSelectionSetting_GetTypes,
} from '../types/lex_V2modelsSlotTypeValueSelectionSetting';
import {
  lex_V2modelsSlotTypeCompositeSlotTypeSetting,
  lex_V2modelsSlotTypeCompositeSlotTypeSetting_GetTypes,
} from '../types/lex_V2modelsSlotTypeCompositeSlotTypeSetting';

export interface V2modelsSlotTypeArgs {
  /*
Name of the slot type

The following arguments are optional:
*/
  name?: string;

  // Identifier of the bot associated with this slot type.
  botId?: string;

  // Description of the slot type.
  description?: string;

  // Type of external information used to create the slot type. See `external_source_setting` argument reference below.
  externalSourceSetting?: lex_V2modelsSlotTypeExternalSourceSetting;

  // Identifier of the language and locale where this slot type is used. All of the bots, slot types, and slots used by the intent must have the same locale.
  localeId?: string;

  //
  timeouts?: lex_V2modelsSlotTypeTimeouts;

  // Determines the strategy that Amazon Lex uses to select a value from the list of possible values. The field can be set to one of the following values: `ORIGINAL_VALUE` returns the value entered by the user, if the user value is similar to the slot value. `TOP_RESOLUTION` if there is a resolution list for the slot, return the first value in the resolution list. If there is no resolution list, return null. If you don't specify the valueSelectionSetting parameter, the default is ORIGINAL_VALUE. See `value_selection_setting` argument reference below.
  valueSelectionSetting?: lex_V2modelsSlotTypeValueSelectionSetting;

  // Version of the bot associated with this slot type.
  botVersion?: string;

  // Specifications for a composite slot type. See `composite_slot_type_setting` argument reference below.
  compositeSlotTypeSetting?: lex_V2modelsSlotTypeCompositeSlotTypeSetting;

  // Built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type. Only AMAZON.AlphaNumeric is supported.
  parentSlotTypeSignature?: string;

  // List of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot. See `slot_type_values` argument reference below.
  slotTypeValues?: lex_V2modelsSlotTypeSlotTypeValues;
}
export class V2modelsSlotType extends DS_Resource {
  // Identifier of the bot associated with this slot type.
  public botId?: string;

  // Type of external information used to create the slot type. See `external_source_setting` argument reference below.
  public externalSourceSetting?: lex_V2modelsSlotTypeExternalSourceSetting;

  /*
Name of the slot type

The following arguments are optional:
*/
  public name?: string;

  //
  public slotTypeId?: string;

  // List of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot. See `slot_type_values` argument reference below.
  public slotTypeValues?: lex_V2modelsSlotTypeSlotTypeValues;

  // Determines the strategy that Amazon Lex uses to select a value from the list of possible values. The field can be set to one of the following values: `ORIGINAL_VALUE` returns the value entered by the user, if the user value is similar to the slot value. `TOP_RESOLUTION` if there is a resolution list for the slot, return the first value in the resolution list. If there is no resolution list, return null. If you don't specify the valueSelectionSetting parameter, the default is ORIGINAL_VALUE. See `value_selection_setting` argument reference below.
  public valueSelectionSetting?: lex_V2modelsSlotTypeValueSelectionSetting;

  // Version of the bot associated with this slot type.
  public botVersion?: string;

  // Specifications for a composite slot type. See `composite_slot_type_setting` argument reference below.
  public compositeSlotTypeSetting?: lex_V2modelsSlotTypeCompositeSlotTypeSetting;

  // Description of the slot type.
  public description?: string;

  // Identifier of the language and locale where this slot type is used. All of the bots, slot types, and slots used by the intent must have the same locale.
  public localeId?: string;

  // Built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type. Only AMAZON.AlphaNumeric is supported.
  public parentSlotTypeSignature?: string;

  //
  public timeouts?: lex_V2modelsSlotTypeTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'valueSelectionSetting',
        "Determines the strategy that Amazon Lex uses to select a value from the list of possible values. The field can be set to one of the following values: `ORIGINAL_VALUE` returns the value entered by the user, if the user value is similar to the slot value. `TOP_RESOLUTION` if there is a resolution list for the slot, return the first value in the resolution list. If there is no resolution list, return null. If you don't specify the valueSelectionSetting parameter, the default is ORIGINAL_VALUE. See `value_selection_setting` argument reference below.",
        () => lex_V2modelsSlotTypeValueSelectionSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'parentSlotTypeSignature',
        'Built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type. Only AMAZON.AlphaNumeric is supported.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the slot type\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'localeId',
        'Identifier of the language and locale where this slot type is used. All of the bots, slot types, and slots used by the intent must have the same locale.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'externalSourceSetting',
        'Type of external information used to create the slot type. See `external_source_setting` argument reference below.',
        () => lex_V2modelsSlotTypeExternalSourceSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => lex_V2modelsSlotTypeTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'botVersion',
        'Version of the bot associated with this slot type.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'compositeSlotTypeSetting',
        'Specifications for a composite slot type. See `composite_slot_type_setting` argument reference below.',
        () => lex_V2modelsSlotTypeCompositeSlotTypeSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'slotTypeValues',
        'List of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot. See `slot_type_values` argument reference below.',
        () => lex_V2modelsSlotTypeSlotTypeValues_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'botId',
        'Identifier of the bot associated with this slot type.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the slot type.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
